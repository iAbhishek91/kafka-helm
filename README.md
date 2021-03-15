# Kafka

In this project we see three things

1. Create a GCP Kubernetes cluster.
2. Create Deploy simple one node kafka broker to the cluster
3. Create topic, produce something which can be consumed

## Running notes

KAFKA

What is Kafka?

Is a high performance , real-time messaging system.
It is open source tool and is a part of Apache projects from 2012.
Create by linkedln.

What are the characteristics of Kafka?

It is a distributed and partitioned messaging system.
highly fault tolerant.
Highly scalable.
Process and send millions of messages per seconds to server receivers.

What is the latest version of Kafka?

2.4.0 after 2.3.1

What are some of the use cases of kafka?

- Messaging services: sending and receiving messages in real time.
- Real time stream processing - kafka can be used to process a continuous stream of information in real time and pass it to stream processing system such as storm.
- Log aggregation: can able to collect physical log files from different systems and store them in central location such as HDFS.
- Commit log service: external commit log for distributed systems.
- Event Sourcing: time ordered sequence of events can be maintained through kafka. Like click, navigation and searches from different websites of an organisation. Then those aggregated data could be sent to real time monitoring system or to Hadoop system for offline processing


What are Kafka cluster?

Kafka cluster are one or more servers which process the data in parallel.  These  servers or processes are known as brokers.

How does data of kafka look like, data model of kafka?

Data model of kafka consists of messages and topics.
- Messages: its the data. For example: line of log from the log file, row of stock market data, or an error message from a system.
- Messages are groups into categories called topics. For example: log message, stock message.

How are topics in kafka structured, explain partition?
- Topics are divided into one or more partitions. This partitions   helps kafka to be achieve parallelism.
- Topic can have any number of partitions. Each partition should fin in a single kafka server for processing.
- Partition contains an ordered set of messages.
- Partitions allows brokers to process the messages in parallel. Number of partition in a topic determine the parallelism in kafka cluster.
- Partition is also known as commit log.
- Each message can be identified by its offsets in the partition. Offset are like array index assigned automatically. So the first element has offset 0. Second message is 1 and third as 2.
- Messages are added at one end of the partition and consumed from other end. Its similar to FIFO. The order remains same. First message which is written is read first.
- Each kafka server (worker) may handle one or more partitions.

How are Kafka achieve partition distributions?

- Partitions can be replicated across several servers or fault tolerance.
- One of the server (broker) is marked as leader and other as followers. Leader controls the read write for the partition and followers will just replicate the data.
- In case leader fails or goes offline, one of the follower will become the leader. Zookeeper is used for the leader selection.
- Partitions are assigned to server across the cluster, so the server(broker) can process the messages in parallel and increase the throughputs.

What is the role of zookeeper?

 Its act as a coordinator. There several responsibility of zookeeper in case of distributed kafka architecture.

- Choosing the leader in. A kafka cluster, when a leader fails.
- Brokers coordinate among each other using zookeeper
- 


who are producers and consumers in kafka?

- processes are refereed as producers and consumers. As you can visualise kafka is a system which sits between two systems. They don’t have direct interaction with physical users.
- Note: that a topic should be available before producer and consumer starts.
- Processes which publish messages into topics in kafka are known as producers. Producers also decide the partition to which the message will go in a topic. 
- Processes which receives the message from topic in kafka are known as consumers. Consumer belongs to consumer group. Consumer group many have one or many consumers. When a message is sent its sent to all the customer in the customer group. Consumer groups are used to control  the messaging system.
- Consumer specify what topics they want to listen to.

Note: producer do not have producer group unlike consumer group.

What are brokers in Kafka?

Brokers are processes or that run on one servers that processes the messages with in kafka are known as brokers. 

Since one server or machine in kafka server can run only one broker, broker and kafka server term is used interchangeably.

What are types of message system are supported by Kafka?

- Publish and subscribe system (pub-sub): each message is received by all the subscriber.
- Queue system: Each message has to be consumed by only one consumer (it can be any available consumer) in order.


What does Kafka guarantees?

- Messages are added in topic’s partition in order as produced.
-  Messages are delivered in same orders to consumers.
- A topic with replication factor N, tolerate upto N-1 server failure. I.e, Kafka should work with one server in the cluster.

What linkedln do with kafka?

Monitoring and messaging and analytics
