---
title: "Observability"
date: "2024-06-07"
description: "Observability is a practice that uses logs, metrics, and traces to monitor and understand system behavior."
featuredImage: "./images/observability.png"
---

Observability is a practice within the realm of software engineering and DevOps that involves a systematic approach to understanding how well a system’s internal states can be inferred from its external outputs. This practice includes collecting, correlating, and analyzing telemetry data from logs, metrics, and traces to monitor and understand system behavior.

## Fundamental Concepts in Observability

The three main fundamental concepts in observability are logs, metrics, and traces.

### Logs

**Logs** are time-stamped records of discrete events that happen within an application. They provide a detailed account of what the system is doing at any given time, including errors, warnings, and informational messages.

Logs are essential for debugging and understanding the sequence of events that led to a particular state in the system. They capture granular details and are particularly useful for diagnosing issues after they occur. Logs can be structured (e.g., JSON) or unstructured (plain text), and they help in tracing the flow of execution, pinpointing errors, and understanding the context of operations within the system.

### Metrics

**Metrics** are numerical measurements that represent the state or performance of a system over time. They are typically aggregated and stored as time series data.

Metrics provide a high-level overview of the system's health and performance. They are used to monitor things like CPU usage, memory consumption, request rates, error rates, and response times. Metrics are crucial for identifying trends, detecting anomalies, and triggering alerts when thresholds are breached. They help in understanding the overall system performance and resource utilization, enabling proactive issue detection and capacity planning.

### Traces

**Traces** track the journey of a request as it travels through various components and services of a distributed system. They provide a detailed map of the request's path, including timing information for each segment of the journey.

Traces are essential for understanding the behavior and performance of distributed systems. They help in pinpointing where bottlenecks and failures occur by showing the flow of requests across different services and components. Traces provide insights into the latency and dependencies between services, making them invaluable for root cause analysis and performance optimization in microservices architectures.

## Practices in Observability

These are some key practices that happen in the realm of observability:

- **Instrumentation**: Adding code to applications to collect telemetry data.
- **Correlation**: Linking logs, metrics, and traces to understand the context of issues.
- **Visualization**: Using dashboards and tools to visualize data for better insights.

## Tools

These are some tools that can help in implementing observability in your systems.

- [**OpenTelemetry (OTel)**](https://opentelemetry.io/): An open-source project that provides a set of APIs, libraries, agents, and instrumentation to enable observability by collecting distributed traces and metrics from applications. It is a part of the observability ecosystem but not the entire practice itself.
- [**Prometheus**](https://prometheus.io/): An open-source systems monitoring and alerting toolkit designed to collect and store metrics as time series data. It features a powerful query language (PromQL), integrates with various systems and services, and includes a built-in alert manager for triggering alerts based on predefined conditions. Prometheus is widely used for monitoring the performance and health of applications and infrastructure.
- [**Jaeger**](https://www.jaegertracing.io/): An open-source end-to-end distributed tracing tool developed by Uber Technologies. It helps monitor and troubleshoot microservices-based distributed systems by tracing the flow of requests across services. Jaeger enables root cause analysis and performance optimization by visualizing trace data, making it easier to identify latency issues and understand service dependencies.
- [**Grafana**](https://grafana.com/): An open-source platform for monitoring and observability that allows users to query, visualize, and explore metrics, logs, and traces from various data sources. It provides powerful, customizable dashboards and supports alerting based on the data. Grafana integrates with numerous data sources, including Prometheus and Jaeger, making it a central hub for visualizing and correlating system health and performance data.