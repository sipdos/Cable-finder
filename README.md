# 🔌 CableFinder

> **Detecta cables electrificados en paredes usando el magnetómetro de tu móvil.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PWA](https://img.shields.io/badge/PWA-Ready-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
[![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20iOS-green.svg)]()

---

## 📱 ¿Qué es CableFinder?

CableFinder es una **aplicación web progresiva (PWA)** que convierte tu teléfono móvil en un detector de cables electrificados ocultos en paredes. No requiere hardware adicional — usa el **magnetómetro** (sensor de campo magnético) que ya lleva tu móvil.

### ⚡ Características principales

- 🎯 **Detector en tiempo real** con medidor circular y gráfico de historial
- 📖 **Tutorial interactivo paso a paso** para usuarios sin conocimientos técnicos
- 🎮 **Modo práctica** con simulador de pared para aprender antes de usarlo
- 📊 **Gráfico de historial** de las últimas lecturas
- 🔧 **Calibración** para ajustar el sensor a tu entorno
- 🌐 **Funciona offline** una vez instalada
- 📲 **Instalable** como app nativa en Android e iOS

---

## 🚀 Instalación

### Android (Chrome)

1. Abre [cablefinder.app](https://tu-usuario.github.io/cablefinder) en Chrome
2. Toca el menú **⋮** → **"Agregar a pantalla de inicio"**
3. Confirma la instalación
4. ¡Listo! Aparecerá como cualquier otra app

### iOS (Safari)

1. Abre la app en Safari
2. Toca el botón **Compartir** (📤)
3. Selecciona **"Agregar a pantalla de inicio"**
4. Toca **"Agregar"**
5. La app aparecerá en tu pantalla de inicio

### Instalación manual (desarrolladores)

```bash
git clone https://github.com/tu-usuario/cablefinder.git
cd cablefinder
# Abre index.html en tu navegador o usa un servidor local
python -m http.server 8000
```

---

## 📖 Manual de uso

### Antes de empezar

> ⚠️ **IMPORTANTE**: Esta app solo detecta cables con **CORRIENTE ELÉCTRICA ACTIVA**. Los cables apagados no generan campo magnético y no serán detectados.

### Paso 1: Preparar el circuito

1. Identifica qué enchufe o interruptor controla la zona donde quieres buscar
2. **Enciende la luz** o **conecta un electrodoméstico** a ese circuito
3. Asegúrate de que haya flujo de corriente

### Paso 2: Posicionar el móvil

| ✅ Correcto | ❌ Incorrecto |
|------------|--------------|
| Paralelo a la pared (plano) | En ángulo o perpendicular |
| A 1-3 cm de distancia | Pegado o muy lejos |
| Movimientos lentos | Movimientos rápidos |
| Parte superior del móvil cerca de la pared | Cualquier orientación |

> 💡 El sensor magnético suele estar en la **parte superior** del teléfono, cerca de la cámara.

### Paso 3: Interpretar las lecturas

| Lectura | Color | Significado |
|---------|-------|-------------|
| 0-15 µT | 🔵 Azul | Sin cables cercanos o apagados |
| 15-30 µT | 🟡 Amarillo | Posible cable cercano, sigue buscando |
| 30+ µT | 🔴 Rojo | **¡Cable detectado!** Estás muy cerca |

### Paso 4: Trazar la ruta del cable

1. Encuentra el punto con el valor más alto (pico)
2. Muévete lentamente en diferentes direcciones desde ese punto
3. La lectura bajará cuando te alejes del cable
4. Marca los puntos de pico máximo para trazar la línea del cable

### Calibración

Antes de buscar cables, presiona el botón **"Calibrar sensor"**:
- Aleja el móvil de metales, electrodomésticos y otros cables
- La app establecerá el valor base de tu entorno
- Esto mejora la precisión de las lecturas

---

## 🎮 Modo Práctica

Antes de usar el detector real, practica con el **simulador de pared**:

1. Ve a la pestaña "Práctica"
2. Toca y arrastra sobre la pared simulada
3. El medidor subirá cuando te acerques a los cables ocultos
4. Usa el botón "Revelar cables" para verificar tus hallazgos

---

## ⚠️ Limitaciones

| Limitación | Explicación |
|------------|-------------|
| Solo cables activos | Los apagados no generan campo magnético |
| Profundidad máxima | ~5 cm en paredes de yeso, menos en concreto |
| No detecta plástico/madera | Solo responde a campos magnéticos |
| Interferencias | Electrodomésticos, metales cercanos, el propio móvil |
| Precisión | ±5-10 cm, no reemplaza un detector profesional |
| No detecta datos (Ethernet, HDMI) | Sin corriente significativa |

> **Disclaimer**: CableFinder es una herramienta orientativa. Para trabajos eléctricos profesionales, use siempre un detector de cables certificado. El autor no se responsabiliza por daños derivados del uso de esta aplicación.

---

## 🛠️ Tecnologías

- **HTML5** + **CSS3** (sin frameworks, puro vanilla)
- **JavaScript ES6+** (sin dependencias externas)
- **Sensor API** (Magnetometer)
- **Canvas API** para gráficos en tiempo real
- **Service Workers** para funcionar offline
- **Web App Manifest** para instalación como PWA

---

## 📂 Estructura del proyecto

```
cablefinder/
├── index.html              # Página de presentación
├── app.html                # Aplicación detectora
├── manifest.json           # Configuración PWA
├── service-worker.js       # Cache offline
├── README.md               # Este archivo
├── LICENSE                 # Licencia MIT
├── assets/
│   ├── icons/              # Iconos de la app
│   │   ├── icon-72.png
│   │   ├── icon-96.png
│   │   ├── icon-128.png
│   │   ├── icon-144.png
│   │   ├── icon-152.png
│   │   ├── icon-192.png
│   │   ├── icon-384.png
│   │   └── icon-512.png
│   └── screenshots/        # Capturas para stores
│       ├── screenshot1.png
│       └── screenshot2.png
```

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si encuentras un bug o tienes una idea:

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/nueva-funcion`)
3. Commit tus cambios (`git commit -am 'Agrega nueva función'`)
4. Push a la rama (`git push origin feature/nueva-funcion`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

---

## 🙏 Agradecimientos

- Inspirado en las apps EMF disponibles en las tiendas
- Diseñado para ser accesible a usuarios sin conocimientos técnicos
- Iconos y recursos visuales creados con SVG puro

---

<p align="center">
  <b>Hecho con ⚡ por la comunidad</b><br>
  <sub>Detecta cables, no dedos</sub>
</p>
