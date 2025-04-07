# Data structures and algorithms

## Description

Ongoing effort to document most common data structures and algorithms, with implementations TypeScript, Rust and Go.

## Run

### TypeScript

    npm i
    npm run test::watch

### Rust

    cargo install
    cargo watch -x test
    cargo watch -x 'test queue_test -- --nocapture'

### Golang

    go test src/01_data_structures/02_linked_list/implementations/go/linked_list_test.go -v
