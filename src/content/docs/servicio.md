---
title: Servicio systemd
lead: Para que Epsilon arranque solo y quede corriendo en segundo plano.
group: Operar
order: 10
---

## Activarlo

Editá las rutas de `deploy/epsilon.service` y después:

```
systemctl --user enable --now /ruta/a/deploy/epsilon.service
```

## Día a día

```
systemctl --user status epsilon     # estado
journalctl --user -u epsilon -f     # registros en vivo
systemctl --user restart epsilon    # reiniciar
```

Reiniciá después de cambiar la configuración.
