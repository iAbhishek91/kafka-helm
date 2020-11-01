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

        const admin = kafka.admin();
        console.log("Connecting.....");
        await admin.connect();
        console.log("Connected!");
        //A-M, N-Z
        await admin.createTopics({
            "topics": [{
                "topic" : "Users",
                "numPartitions": 2
            }]
        })
        console.log("Topic Created Successfully!");
        await admin.disconnect();
        console.log("Disconnected from kafka broker!");
    }
    catch(e)
    {
        console.error(`ERR ${e}`);
    }
    finally{
        process.exit(0);
    }
}