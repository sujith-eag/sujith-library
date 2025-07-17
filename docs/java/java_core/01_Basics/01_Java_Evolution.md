# Evolution of Java

Java was conceived in 1991 by James Gosling, Patrick Naughton, Chris Warth, Ed Frank, and Mike Sheridan at Sun Microsystems.

* Java 1.0 (1995): The original release by Sun Microsystems, Inc.

* Java 1.1: The first major update.

* Java 2 (Version 1.2): Introduced major enhancements and marked the beginning of the Java 2 Platform, Standard Edition (J2SE).

* J2SE 1.3: Further upgrade with various improvements.

* J2SE 5 (JDK 5): Represented a major evolution of the language, sometimes referred to as a second Java revolution.

* Java SE 6 (JDK 6): The "2" was dropped from the name. Officially called Java Platform, Standard Edition 6, with an internal version number of 1.6.

* Java SE 7 (JDK 7): The first major Java release after Oracle acquired Sun Microsystems.

* Java SE 8 (JDK 8): Internal version 1.8. Introduced lambda expressions, marking a significant language feature enhancement.

* Java SE 9 (JDK 9): Internal version 9. Applets were officially deprecated and are no longer recommended for new projects.

* Java SE 10 (JDK 10): Released in March 2018. Marked a change in the Java release cycle to a six-month cadence.

* 2018: Java SE 11 (JDK 11): The first Long-Term Support (LTS) release under the new schedule. Applet support was fully removed. JavaFX was decoupled from the JDK and became a separate open-source project.

* 2021: Java SE 17 (JDK 17): The second LTS release, receiving long-term support and updates. This version has been a major update point for many educational and industry references. It included features like sealed classes and pattern matching for the switch.

* 2022: Java 18 (JDK 18) was released, introducing features like code snippets in Java API documentation and a simple web server.

* 2022: Java 19 (JDK 19) was released, featuring features like virtual threads and foreign function & memory API (incubator).

* 2023: Java 20 (JDK 20) was released, continuing the enhancement of features like pattern matching and record patterns.

* 2024: Java 21 (JDK 21) was released, further improving language features and performance.

* 2025: Java 22 (JDK 22) was released, continuing the evolution of the language and platform.

## Java Fundamentals

Java was originally developed to meet the need for a **platform-independent programming language** for embedded systems in consumer electronics (e.g., toasters, microwave ovens, remote controls). At the time, most programming languages compiled to machine code specific to a particular CPU, which limited cross-platform capabilities.

Although C++ could be compiled for many CPU types, it required separate compilers for each. To solve this problem, Java was designed to be **portable and cross-platform**, capable of running on various types of hardware using the Java Virtual Machine (JVM).

With the rise of the **World Wide Web**, Java gained widespread popularity due to its portability and network-centric design. Its syntax was derived from **C**, while its object model was influenced by **C++**.

However, Java is not an "Internet version of C++." It is **not upwardly or downwardly compatible** with C++. It was created to address specific challenges and does not aim to replace C++.

___

### Java Applets

Java applets enabled a shift of some application functionality from the server to the client, allowing interactive and dynamic content in web browsers. Unlike static web content (like reading emails or downloading files), applets were **self-executing programs**, acting as active agents on the client-side.

However, applets required a **Java browser plug-in**, which over time lost support in modern browsers. Starting with **JDK 9**, applets began to be phased out and were **fully removed by JDK 11**.

To address the need for packaging and distributing applications post-applets, two tools were introduced:

* **`jlink`** (JDK 9): Creates a custom runtime image containing only the necessary modules and the JRE.
* **`jpackage`** (JDK 16): Builds installable applications for distribution.
