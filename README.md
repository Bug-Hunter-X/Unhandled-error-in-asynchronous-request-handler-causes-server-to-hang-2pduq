# Unhandled Error in Asynchronous Request Handler

This repository demonstrates a common error in Node.js servers where an unhandled error in an asynchronous request handler can cause the server to stop responding to client requests.  The error is logged, but no response is sent to the client, leading to a poor user experience.

## Problem

The `bug.js` file shows a simple HTTP server that performs an asynchronous operation. If this operation throws an error, the error is caught, but the server doesn't send a response to the client.  This results in the client's request hanging indefinitely.

## Solution

The `bugSolution.js` file provides a solution by ensuring that a response is always sent to the client, regardless of whether the asynchronous operation succeeds or fails. This prevents the server from hanging and provides a more robust user experience.

## How to run

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js` to see the problematic behavior.
4. Run `node bugSolution.js` to see the corrected behavior.  