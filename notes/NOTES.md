<h1 align="center">Binary to Decimal IP Conversion</h1>

## Definition of Binary IP

A binary IP is a representation (in octets) of an IP address using 0s and 1s, denoting the numerical identifier for devices on a network.

## Definition of Octet

An octet comprises 8 bits, the fundamental units of digital information in computing. In the context of IP addresses, each of the four sets of 8 bits (32 bits in total) is referred to as an octet.

## Explanation

In computer networking, IP addresses are often expressed in binary format. To convert a binary IP address to its decimal equivalent, follow these steps using the powers of 2:

### Step 1: Understand the Binary IP Structure

An IP address consists of four octets, each containing 8 bits, typically separated by dots.

Example Binary IP: `11000000.10101000.00000001.00001010`

### Step 2: Convert Each Octet to Decimal

#### Octet 1: `11000000`
- $(1 \times 2^7) + (1 \times 2^6) + (0 \times 2^5) + (0 \times 2^4) + (0 \times 2^3) + (0 \times 2^2) + (0 \times 2^1) + (0 \times 2^0) = 192$

#### Octet 2: `10101000`
- ($1 \times 2^7) + (0 \times 2^6) + (1 \times 2^5) + (0 \times 2^4) + (1 \times 2^3) + (0 \times 2^2) + (0 \times 2^1) + (0 \times 2^0) = 168$

#### Octet 3: `00000001`
- $(0 \times 2^7) + (0 \times 2^6) + (0 \times 2^5) + (0 \times 2^4) + (0 \times 2^3) + (0 \times 2^2) + (0 \times 2^1) + (1 \times 2^0) = 1$

#### Octet 4: `00001010`
- $(0 \times 2^7) + (0 \times 2^6) + (0 \times 2^5) + (0 \times 2^4) + (1 \times 2^3) + (0 \times 2^2) + (1 \times 2^1) + (0 \times 2^0) = 10$

### Step 3: Combine Decimal Values

Combine the decimal values from each octet to obtain the final decimal representation of the binary IP.

Example Decimal IP: `192.168.1.10`