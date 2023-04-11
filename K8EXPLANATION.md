This is a Kubernetes manifest file that describes two services and two deployments.

The first service is named "backend" and is of type "ClusterIP".
 It selects pods labeled with "app: yolo" and exposes port 5000. 
 The second service is named "client" and is also of type "ClusterIP". 
 It selects pods labeled with "app: yolo" and exposes port 3000.

The first deployment is also named "backend" and creates one replica of a pod that runs a container with the image "europe-west1-docker.pkg.dev/my-first-project-382618/yolo1/shirlyne/yolobackend:1.0.0". The pod is labeled with "app: backend". 
The container exposes port 5000.

The second deployment is named "client" and creates one replica of a pod that runs a container with the image "europe-west1-docker.pkg.dev/my-first-project-382618/yolo1/shirlyne/yoloclient:1.0.0". The pod is labeled with "app: client". 
The container exposes port 3000.

The "apiVersion: v1" specifies the Kubernetes API version used in the manifest file. In this case, it uses the "v1" version of the Kubernetes API.
The application point of access
http://35.233.50.217:3000/