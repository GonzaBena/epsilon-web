---
title: Variables de entorno
lead: Se cargan desde `src/epsilon/.env` o desde la página de configuración.
group: Configurar
order: 5
---

| Variable | Qué hace |
| --- | --- |
| `GEMINI_API_KEY` | Clave de Gemini. Hace falta para resúmenes, imagen a CSV e IA. |
| `GEMINI_MODEL` | Modelo de Gemini. Por defecto gemini-3.1-flash-lite. |
| `DATA_DIR` | Carpeta de datos. Por defecto ~/epsilon-data. |
| `WEB_PORT` | Puerto de la web local. Por defecto 8765. |
| `TELEGRAM_TOKEN` | Token del bot de Telegram. |
| `ALLOWED_USER_ID` | Único usuario al que responde el bot. |
| `TELEGRAM_ENABLED` | si o no: activa o desactiva el bot. |
| `USD_ARS` | Cotización manual para ver los gastos en pesos. |
| `CHAT_LIMIT_USD` | Límite de costo por chat con IA. Por defecto 0.50. |
| `VOICE_ENABLED` | Activa o desactiva la voz. Por defecto si. |
| `VOICE_CONFIRM` | Pide confirmación antes de ejecutar notas de voz de Telegram. Por defecto no. |
| `ASSISTANT_NAME` | Nombres con los que le hablás por voz. Por defecto ia, ai. |
| `WHISPER_LANGUAGE` | Idioma de la transcripción. |
| `WHISPER_IDLE_MINUTES` | Tiempo de inactividad de Whisper, en minutos. |
| `WHISPER_DEVICE` | cpu o cuda. |
