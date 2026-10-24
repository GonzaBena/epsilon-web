---
title: Voz
lead: La transcripción de notas de voz corre en tu equipo con Whisper. Es opcional.
group: Usar
order: 9
---

## Activarla

Instalá el extra de voz:

```
uv sync --extra voz
```

## Variables

- `VOICE_ENABLED` activa o desactiva la voz.
- `VOICE_CONFIRM` pide confirmación antes de ejecutar notas de voz de Telegram.
- `ASSISTANT_NAME` define cómo le hablás: por defecto, ia o ai.
- `WHISPER_LANGUAGE`, `WHISPER_IDLE_MINUTES` y `WHISPER_DEVICE` (cpu o cuda) ajustan la transcripción.

[Ver todas las variables](../variables/)
