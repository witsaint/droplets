FROM registry.gitlab.jufandev.com/k8s/node-base-image/build AS builder

WORKDIR /${PROJECT_NAME}
COPY / .
RUN yarn install
ARG DEPLOY_ENV
RUN if [ ${DEPLOY_ENV} = "production" ] ; then yarn run build ; else yarn run build:stage ; fi

FROM registry.gitlab.jufandev.com/k8s/node-base-image/server

COPY --from=builder server.js .
COPY --from=builder ./dist/ ./dist/
CMD [ "node", "./server.js" ]
