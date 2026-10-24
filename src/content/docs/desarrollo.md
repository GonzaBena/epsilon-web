---
title: Desarrollo y licencia
lead: Cómo probar el código y bajo qué licencia se publica.
group: Proyecto
order: 13
---

## Tests

Los tests no llaman a Gemini ni cargan Whisper:

```
uv run pytest
```

## Licencia

MIT. El archivo `markdown-it.min.js` es de terceros y mantiene su propia licencia, también MIT. El código está en [GitHub](https://github.com/GonzaBena/epsilon-agent).
