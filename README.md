Para que funcione mongodb del servidor es necesario asignar la ip del servidor en el archivo mongod.conf

```bash
bindIp: 127.0.0.1, 192.168.128.128
```

Y despues reiniciar el servicio

```bash
sudo systemctl restart mongodb
mongosh --host 192.168.128.128
```

Correr el binario
```bash
npm link
cli-nodejs task -l
```

Desinstalar el binario
```bash
npm unlink cli-nodejs
```