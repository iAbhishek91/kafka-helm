const { Kafka } = require("kafkajs");
const { KAFKA_BROKER_IP } = require('./config');

run();
async function run(){
  try
  {
    const kafka = new Kafka({
        "clientId": "myapp",
        "brokers" :[KAFKA_BROKER_IP]
    });

    const consumer = kafka.consumer({"groupId": "test"})
    console.log("Connecting.....")
    await consumer.connect()
    console.log("Connected!")
    
    await consumer.subscribe({
        "topic": "Users",
        "fromBeginning": true
    })
    
    await consumer.run({
        "eachMessage": async result => {
            console.log(`RVD Msg ${result.message.value} on partition ${result.partition}`)
        }
    })


  }
  catch(e)
  {
    console.error(`ERR ${e}`)
  }
}