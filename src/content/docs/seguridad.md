---
title: Seguridad
lead: Epsilon corre en tu máquina y lo que viene de afuera es dato, nunca instrucción.
group: Operar
order: 11
---

- La web escucha solo en 127.0.0.1.
- El bot responde solo al `ALLOWED_USER_ID`.
- Las claves no salen del servidor.
- Todo acceso a archivos se limita a `DATA_DIR`.

> **La web no tiene login.** Si la exponés a la red, agregá contraseña y HTTPS.
