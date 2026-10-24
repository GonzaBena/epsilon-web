---
title: Arquitectura
lead: Un núcleo que no conoce los canales y adaptadores finos para cada uno.
group: Proyecto
order: 12
---

| Módulo | Qué hace |
| --- | --- |
| `core.py` | Lógica de comandos, confirmaciones y sesión. No conoce los canales. |
| `channels/web.py` | Adapta la web local al núcleo. |
| `channels/telegram.py` | Adapta el bot de Telegram al núcleo. |
| `tools.py` | Registro de herramientas: la fuente única de los comandos. |
| `ai/` | Cliente de Gemini (ai/llm.py) y control de gasto. |
| `data/` | Notas y conversaciones. |
| `voice/` | Transcripción con Whisper. |
| `settings/` | El archivo .env y las pruebas de conexión. |
| `tests/` y `docs/` | Tests y planes de diseño. |

Hecho con Python 3.12+, FastAPI, la API de Gemini, Whisper, el bot de Telegram, uv, pytest y markdown-it.
