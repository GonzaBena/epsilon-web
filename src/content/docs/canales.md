---
title: Web y Telegram
lead: Dos formas de hablarle al mismo agente. Los comandos y los datos son los mismos en las dos.
group: Usar
order: 8
---

## Web local

Es el canal principal y escucha en el puerto de `WEB_PORT`. Desde `/config` también configurás todo lo demás.

## Bot de Telegram

Es opcional. Cargá `TELEGRAM_TOKEN` y `ALLOWED_USER_ID` y activalo con `TELEGRAM_ENABLED=si`. El bot responde solo a ese usuario.

## Otros canales

Se suman con plugins que se enchufan al mismo núcleo, sin tocar la lógica de los comandos.
