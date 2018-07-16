# Banking

[![Build Status](https://travis-ci.org/rbung/Banking.svg?branch=master)](https://travis-ci.org/rbung/Banking)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Feature to implement

```text
Feature: Withdraw from account
  As a client of the bank
  I want to withdraw money from my account
  In order to have cash

  Scenario: An existing client withdraws from his account
    Given an existing client named "pierre-jean" with 100.0 EUR in his account
    When he withdraws 10.0 EUR from his account
    Then the new balance is 90.0 EUR
```

## Pre-requisite

- A [NodeJs](https://nodejs.org/en/) installation

## Installation

- on a terminal

```bash
npm install
```

## Execute the tests

- on a terminal

```bash
npm test
```

![Test results](/test_results.png)
