import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

#  Configuraciones
WAIT_TIMEOUT = 15
URL = "https://ronaldjps20.github.io/proyecto_final/"

# Lista para almacenar resumen de acciones 
resumen_acciones = []

# Función para capturar pantalla
def captura(nombre):
    filename = f"{nombre}.png"
    driver.save_screenshot(filename)
    print(f" Captura guardada: {filename}")
    resumen_acciones.append((nombre, filename))

# Función para agregar texto al resumen
def agregar_resumen(texto):
    print(texto)
    resumen_acciones.append((texto, None))

# Configurar navegador
options = Options()
options.add_argument("--start-maximized")
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=options)
wait = WebDriverWait(driver, WAIT_TIMEOUT)

try:
    agregar_resumen(" Abriendo página")
    driver.get(URL)
    time.sleep(2)
    captura("Inicio")

    #  Validar Categorías
    agregar_resumen("\n Validando las categorias.")
    categorias_ids = ["ninos", "carreras", "shooters"]
    for categoria_id in categorias_ids:
        try:
            boton = wait.until(EC.element_to_be_clickable((By.ID, categoria_id)))
            boton.click()
            agregar_resumen(f"✅ Categoría abierta: {categoria_id}")
            
        except Exception as e:
            agregar_resumen(f" No se pudo ingresar a la categoria {categoria_id}: {e}")
    captura("Categorias_Validadas")

    # Compra 
    agregar_resumen("\n Validando compra.")
    driver.execute_script("window.scrollTo(0, 0);")
    time.sleep(1)

    botones_agregar = wait.until(
        EC.presence_of_all_elements_located((By.CLASS_NAME, "add-to-cart-btn"))
    )
    if botones_agregar:
        botones_agregar[0].click()
        agregar_resumen(" Producto agregado al carrito.")
        time.sleep(1)
        captura("Producto_Agregado_Al_Carrito")
    else:
        agregar_resumen(" No se encontró ningún botón con clase 'add-to-cart-btn'.")
        captura("Error_Sin_Boton_Agregar_Producto")

    carrito_btn = wait.until(EC.element_to_be_clickable((By.ID, "cart-button")))
    carrito_btn.click()
    agregar_resumen(" Carrito abierto.")
    wait.until(EC.visibility_of_element_located((By.ID, "checkout-button")))
    captura("Carrito_Abierto_Y_Visible")

    boton_pagar = wait.until(EC.element_to_be_clickable((By.ID, "checkout-button")))
    boton_pagar.click()
    agregar_resumen(" Click en 'Proceder al Pago'.")
    time.sleep(2)
    captura("Compra_Simulada_Finalizada")

    #  Completar Formulario 
    agregar_resumen("\n Completando Formulario de Contacto...")
    contacto_btn = wait.until(EC.element_to_be_clickable((By.ID, "contacto")))
    contacto_btn.click()

    wait.until(EC.visibility_of_element_located((By.ID, "nombre"))).send_keys("Ronald Possu")
    wait.until(EC.visibility_of_element_located((By.ID, "numero"))).send_keys("3004887978")
    wait.until(EC.visibility_of_element_located((By.ID, "correo"))).send_keys("ronalp@gmail.com")
    wait.until(EC.visibility_of_element_located((By.ID, "comentario"))).send_keys("funcionaaaaaaaaaa")
    
    wait.until(EC.element_to_be_clickable((By.TAG_NAME, "button"))).click()
    agregar_resumen(" Formulario enviado con éxito.")
    captura("Formulario_Enviado")

except Exception as e:
    agregar_resumen(f" Error durante la automatización: {e}")
    captura("Error_Automatizacion")

finally:
    # Crear archivo HTML resumen
    resumen_html = """
    <html>
    <head><title>Resumen de Automatización</title></head>
    <body>
        <h1>Resumen de la Automatización</h1>
    """
    for item in resumen_acciones:
        texto, img = item
        if img:
            resumen_html += f"<h3>{texto}</h3><img src='{img}' style='max-width:600px;'><br><br>"
        else:
            resumen_html += f"<p>{texto}</p>"
    resumen_html += "</body></html>"

    with open("resumen_automatizacion.html", "w", encoding="utf-8") as f:
        f.write(resumen_html)
    print("📄 Archivo resumen_automatizacion.html creado.")

    driver.quit()
    agregar_resumen("🚪 Navegador cerrado.")
