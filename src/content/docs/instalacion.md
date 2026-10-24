---
title: Instalación
lead: Clonás el repositorio e instalás las dependencias con uv.
group: Empezar
order: 3
---

```
git clone https://github.com/GonzaBena/epsilon-agent.git
cd epsilon-agent
uv sync                # dependencias básicas
uv sync --extra voz    # opcional: Whisper para notas de voz
```

El extra `voz` suma Whisper para transcribir notas de voz en tu equipo. Si no lo necesitás, alcanza con `uv sync`.

[Ver la guía de instalación paso a paso](../../instalar/)
