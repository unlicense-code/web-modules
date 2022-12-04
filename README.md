# web-modules a Standard for the Web 4.0
A Web Module Loader can also be used in WInterCG Standard Supporting Runtimes

This Implements a basic Module Loader for Web Runtimes it builds the backbone for the Web 4.0 as this is defined out of
ECMAScript Modules and Asset References. This offers the Basic Loading and Versioning Structure for the Code. 


web-modules has evolved the infrastructure of the Web, with many things we've learned from successful systems, like Git, BitTorrent, Kademlia, Bitcoin, and many, many more. This is the sort of thing that would have come out of ARPA/DARPA, IETF, or Bell Labs in another age. Web 4.0 state 2 after genesis boot so V_ETH2 on top of WebRTC for interop with the existing legacy web.

addressed by content and references so called specifiers. It enables the creation of completely distributed applications, and in doing so aims to make the web faster, safer, and more open.

distributed content system that seeks to connect all computing devices with the same system. In some ways, this is similar to the original aims of the Web, similar to a single BitTorrent swarm exchanging Git objects. You can read more about its origins in the paper of projects like IPFS - Content Addressed, Versioned, P2P File System.

web-modules is the new major system of the internet / web 4.0. If built right, it replaces HTTP3. It could complement or replace even more. Let's go point-by-point into how.

## web-modules is a protocol:
- Defines a content-addressed device or system
- Coordinates content delivery via a capability based protocol full isolation like vm's
- Combines Kademlia + BitTorrent + Git to supply you out of the box versioning enables world wide shared build grid.
- web-modules can represent a device or a file system:

## web-modules Has directories and files as also devices and modules
- Is a mountable filesystem (via FUSE)
- is a web:

## web-modules Can be used to view documents like the conventional web
- Files are accessible via HTTP at https://ipfs.io/<path>
- Browsers and extensions can use the ipfs:// URL or ipns:// URI schemes directly
- Hash-addressed content guarantees authenticity
- Also it enables direct delivery via existing protocols like http via ECMAscript Modules as a fundation for linking
is a modular:

## web-modules Connection layer over any network protocol
- Routing layer
- Uses a routing layer DHT (Kademlia/Coral)
- Uses a path-based naming service
- Uses a BitTorrent-inspired block exchange

## web-modules uses crypto:
- Cryptographic-hash content addressing
- Block-level deduplication
- File integrity plus versioning
- File-system-level encryption plus signing support
- is p2p:

## web-modules Worldwide peer-to-peer file transfers
- Completely decentralized architecture
- No central point of failure

## web-modules is a CDN:
- Add a file to the file system locally, and it's now available to the world
- Caching-friendly (content-hash naming)
- BitTorrent-based bandwidth distribution

## web-modules is a name service:
- IPNS, an SFS-inspired name system
- Global namespace based on PKI
- It serves to build trust chains
- It's compatible with other NSes
- Can map DNS, .onion, .bit, etc to IPNS
