set NODE_ENV=development
set CLUSTER_BALANCER_URL=http://localhost:3000
set CLUSTER_DISCOVERY_URL=mongodb://127.0.0.1:27017/meteor
set CLUSTER_ENDPOINT_URL=http://localhost:3000
set CLUSTER_SERVICE=web
set DEBUG=*,-mocha:*,-connect:*,-send,-compression,-kadira:*,-babel,-stylus:*,-express:*
set MAIL_URL=smtp://localhost:25
set MONGO_URL=mongodb://127.0.0.1:27017/playground
set HOT_DEBUG=3
meteor
