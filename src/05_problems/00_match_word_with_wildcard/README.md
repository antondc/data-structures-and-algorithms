# Match word with wildcard

Write a function that returns a boolean if a pattern matches with a word.

`match(pattern: string, word: string): boolean`

For example
`match("datadog", "datadog") // true`
`match("datadog", "datadogs") // false`

There may be numbers in between, symbolising number of wildcards. For example:

`match("3", "abc") // true`
`match("3", "abcd") // false`
`match("d3dog", "datadog") // true`
