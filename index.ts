import { connect } from "nats";

const connection = await connect({ servers: ["nats://localhost:4222"]});

