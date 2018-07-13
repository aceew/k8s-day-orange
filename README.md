# K8s Day with Jujhar

Setting up k8s on GCP.

## Notes

### Proxy to the remote control plane

```bash
kubectl proxy
```

### Deployment Controller Token

```bash
kubectl -n kube-system describe secret $(kubectl -n kube-system get secret)
```

### Deploy Pod

```bash
kubectl apply -f pod.yaml
```

### Replica sets