---
title: Configuración
lead: Cargá tu clave y probá que todo conecte. Se puede hacer con un archivo o desde la web.
group: Configurar
order: 4
---

1. Copiá `src/epsilon/.env.example` a `src/epsilon/.env`.
2. Cargá tu `GEMINI_API_KEY`, o configurá todo desde `http://127.0.0.1:8765/config`.
3. Tocá «Probar conexión». No gasta tokens.
4. Reiniciá Epsilon a mano después de cambiar la configuración.

## Otro archivo de configuración

Para probar con otra configuración, apuntá a otro archivo:

```
EPSILON_ENV_FILE=/ruta/otro.env uv run epsilon
```
