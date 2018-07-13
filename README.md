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

### Apply kube spec

```bash
kubectl apply -f <pod.yaml| deployment.yaml>
```

### Replica sets

Deployments sit on top of replica sets. They do the green blue deploys for you.

Pods belong to RS, RS belongs to deployments. Deployments belong to services. Services are layer 4 TCP LBs.

Ingress controllers can sit on top of services.