const { Kafka } = require("kafkajs")
const { KAFKA_BROKER_IP } = require('./config');

const msg = process.argv[2];

run();

async function run(){
    try
    {
      const kafka = new Kafka({
          "clientId": "myapp",
          "brokers" :[KAFKA_BROKER_IP]
      });

      const producer = kafka.producer();
      console.log("Connecting.....")
      await producer.connect()
      console.log("Connected!")
      //A-M 0 , N-Z 1 
      const partition = msg[0] < "N" ? 0 : 1;
      const result =  await producer.send({
        "topic": "Users",
        "messages": [
          {
            "value": msg,
            "partition": partition
          }
        ]
      })

      console.log(`Send Successfully! ${JSON.stringify(result)}`)
      await producer.disconnect();
    }
    catch(ex)
    {
      console.error(`ERR ${e}`)
    }
    finally{
      process.exit(0);
    }
}