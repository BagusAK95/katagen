# KataGen

Training data generator for kata.ai platform.

# Authors

* Rizyan
* Go Frendi
* Bagus

# Run the Program

## Create .env

```
HOST=127.0.0.1
PORT=3333
NODE_ENV=development

APP_NAME=AdonisJs
APP_URL=http://${HOST}:${PORT}

CACHE_VIEWS=false

APP_KEY="0123456789abcdef"

DB_CONNECTION=sqlite
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=adonis

HASH_DRIVER=bcrypt
```

## Install NPM Modules

```
npm install
```

## Start the Server

```
node server.js
```

# Test

## Generate

Send `POST` request to `http://127.0.0.01:3333/generate` with HTTP Body as follow:

```json
{
	"projectId": "some-random-project",
	"wordList": [["aku", "saya", "kamu", "bagus", ""], ["noob", "cupu"], ["banget", "sangat"]],
	"traitList": ["sentiment.negative", "intent.ngilokno"],
	"defaultLabelList": ["kata.person", "kata.adjective", ""],
	"wordLabel": {"bagus": "kata.special_person"}
}
```

The expected result is

```json
[
  {
    "input": "aku noob banget",
    "entities": [
      {
        "id": 0,
        "entity": "kata",
        "label": "person",
        "start": 0,
        "end": 3,
        "value": "aku"
      },
      {
        "id": 1,
        "entity": "kata",
        "label": "adjective",
        "start": 4,
        "end": 8,
        "value": "noob"
      },
      {
        "id": 2,
        "entity": "sentiment",
        "label": "negative",
        "start": 0,
        "end": 15,
        "value": "negative"
      },
      {
        "id": 3,
        "entity": "intent",
        "label": "ngilokno",
        "start": 0,
        "end": 15,
        "value": "ngilokno"
      }
    ]
  },
  {
    "input": "aku noob sangat",
    "entities": [
      {
        "id": 0,
        "entity": "kata",
        "label": "person",
        "start": 0,
        "end": 3,
        "value": "aku"
      },
      {
        "id": 1,
        "entity": "kata",
        "label": "adjective",
        "start": 4,
        "end": 8,
        "value": "noob"
      },
      {
        "id": 2,
        "entity": "sentiment",
        "label": "negative",
        "start": 0,
        "end": 15,
        "value": "negative"
      },
      {
        "id": 3,
        "entity": "intent",
        "label": "ngilokno",
        "start": 0,
        "end": 15,
        "value": "ngilokno"
      }
    ]
  },
  {
    "input": "aku cupu banget",
    "entities": [
      {
        "id": 0,
        "entity": "kata",
        "label": "person",
        "start": 0,
        "end": 3,
        "value": "aku"
      },
      {
        "id": 1,
        "entity": "kata",
        "label": "adjective",
        "start": 4,
        "end": 8,
        "value": "cupu"
      },
      {
        "id": 2,
        "entity": "sentiment",
        "label": "negative",
        "start": 0,
        "end": 15,
        "value": "negative"
      },
      {
        "id": 3,
        "entity": "intent",
        "label": "ngilokno",
        "start": 0,
        "end": 15,
        "value": "ngilokno"
      }
    ]
  },
  {
    "input": "aku cupu sangat",
    "entities": [
      {
        "id": 0,
        "entity": "kata",
        "label": "person",
        "start": 0,
        "end": 3,
        "value": "aku"
      },
      {
        "id": 1,
        "entity": "kata",
        "label": "adjective",
        "start": 4,
        "end": 8,
        "value": "cupu"
      },
      {
        "id": 2,
        "entity": "sentiment",
        "label": "negative",
        "start": 0,
        "end": 15,
        "value": "negative"
      },
      {
        "id": 3,
        "entity": "intent",
        "label": "ngilokno",
        "start": 0,
        "end": 15,
        "value": "ngilokno"
      }
    ]
  },
  {
    "input": "saya noob banget",
    "entities": [
      {
        "id": 0,
        "entity": "kata",
        "label": "person",
        "start": 0,
        "end": 4,
        "value": "saya"
      },
      {
        "id": 1,
        "entity": "kata",
        "label": "adjective",
        "start": 5,
        "end": 9,
        "value": "noob"
      },
      {
        "id": 2,
        "entity": "sentiment",
        "label": "negative",
        "start": 0,
        "end": 16,
        "value": "negative"
      },
      {
        "id": 3,
        "entity": "intent",
        "label": "ngilokno",
        "start": 0,
        "end": 16,
        "value": "ngilokno"
      }
    ]
  },
  {
    "input": "saya noob sangat",
    "entities": [
      {
        "id": 0,
        "entity": "kata",
        "label": "person",
        "start": 0,
        "end": 4,
        "value": "saya"
      },
      {
        "id": 1,
        "entity": "kata",
        "label": "adjective",
        "start": 5,
        "end": 9,
        "value": "noob"
      },
      {
        "id": 2,
        "entity": "sentiment",
        "label": "negative",
        "start": 0,
        "end": 16,
        "value": "negative"
      },
      {
        "id": 3,
        "entity": "intent",
        "label": "ngilokno",
        "start": 0,
        "end": 16,
        "value": "ngilokno"
      }
    ]
  },
  {
    "input": "saya cupu banget",
    "entities": [
      {
        "id": 0,
        "entity": "kata",
        "label": "person",
        "start": 0,
        "end": 4,
        "value": "saya"
      },
      {
        "id": 1,
        "entity": "kata",
        "label": "adjective",
        "start": 5,
        "end": 9,
        "value": "cupu"
      },
      {
        "id": 2,
        "entity": "sentiment",
        "label": "negative",
        "start": 0,
        "end": 16,
        "value": "negative"
      },
      {
        "id": 3,
        "entity": "intent",
        "label": "ngilokno",
        "start": 0,
        "end": 16,
        "value": "ngilokno"
      }
    ]
  },
  {
    "input": "saya cupu sangat",
    "entities": [
      {
        "id": 0,
        "entity": "kata",
        "label": "person",
        "start": 0,
        "end": 4,
        "value": "saya"
      },
      {
        "id": 1,
        "entity": "kata",
        "label": "adjective",
        "start": 5,
        "end": 9,
        "value": "cupu"
      },
      {
        "id": 2,
        "entity": "sentiment",
        "label": "negative",
        "start": 0,
        "end": 16,
        "value": "negative"
      },
      {
        "id": 3,
        "entity": "intent",
        "label": "ngilokno",
        "start": 0,
        "end": 16,
        "value": "ngilokno"
      }
    ]
  },
  {
    "input": "kamu noob banget",
    "entities": [
      {
        "id": 0,
        "entity": "kata",
        "label": "person",
        "start": 0,
        "end": 4,
        "value": "kamu"
      },
      {
        "id": 1,
        "entity": "kata",
        "label": "adjective",
        "start": 5,
        "end": 9,
        "value": "noob"
      },
      {
        "id": 2,
        "entity": "sentiment",
        "label": "negative",
        "start": 0,
        "end": 16,
        "value": "negative"
      },
      {
        "id": 3,
        "entity": "intent",
        "label": "ngilokno",
        "start": 0,
        "end": 16,
        "value": "ngilokno"
      }
    ]
  },
  {
    "input": "kamu noob sangat",
    "entities": [
      {
        "id": 0,
        "entity": "kata",
        "label": "person",
        "start": 0,
        "end": 4,
        "value": "kamu"
      },
      {
        "id": 1,
        "entity": "kata",
        "label": "adjective",
        "start": 5,
        "end": 9,
        "value": "noob"
      },
      {
        "id": 2,
        "entity": "sentiment",
        "label": "negative",
        "start": 0,
        "end": 16,
        "value": "negative"
      },
      {
        "id": 3,
        "entity": "intent",
        "label": "ngilokno",
        "start": 0,
        "end": 16,
        "value": "ngilokno"
      }
    ]
  },
  {
    "input": "kamu cupu banget",
    "entities": [
      {
        "id": 0,
        "entity": "kata",
        "label": "person",
        "start": 0,
        "end": 4,
        "value": "kamu"
      },
      {
        "id": 1,
        "entity": "kata",
        "label": "adjective",
        "start": 5,
        "end": 9,
        "value": "cupu"
      },
      {
        "id": 2,
        "entity": "sentiment",
        "label": "negative",
        "start": 0,
        "end": 16,
        "value": "negative"
      },
      {
        "id": 3,
        "entity": "intent",
        "label": "ngilokno",
        "start": 0,
        "end": 16,
        "value": "ngilokno"
      }
    ]
  },
  {
    "input": "kamu cupu sangat",
    "entities": [
      {
        "id": 0,
        "entity": "kata",
        "label": "person",
        "start": 0,
        "end": 4,
        "value": "kamu"
      },
      {
        "id": 1,
        "entity": "kata",
        "label": "adjective",
        "start": 5,
        "end": 9,
        "value": "cupu"
      },
      {
        "id": 2,
        "entity": "sentiment",
        "label": "negative",
        "start": 0,
        "end": 16,
        "value": "negative"
      },
      {
        "id": 3,
        "entity": "intent",
        "label": "ngilokno",
        "start": 0,
        "end": 16,
        "value": "ngilokno"
      }
    ]
  },
  {
    "input": "bagus noob banget",
    "entities": [
      {
        "id": 0,
        "entity": "kata",
        "label": "special_person",
        "start": 0,
        "end": 5,
        "value": "bagus"
      },
      {
        "id": 1,
        "entity": "kata",
        "label": "adjective",
        "start": 6,
        "end": 10,
        "value": "noob"
      },
      {
        "id": 2,
        "entity": "sentiment",
        "label": "negative",
        "start": 0,
        "end": 17,
        "value": "negative"
      },
      {
        "id": 3,
        "entity": "intent",
        "label": "ngilokno",
        "start": 0,
        "end": 17,
        "value": "ngilokno"
      }
    ]
  },
  {
    "input": "bagus noob sangat",
    "entities": [
      {
        "id": 0,
        "entity": "kata",
        "label": "special_person",
        "start": 0,
        "end": 5,
        "value": "bagus"
      },
      {
        "id": 1,
        "entity": "kata",
        "label": "adjective",
        "start": 6,
        "end": 10,
        "value": "noob"
      },
      {
        "id": 2,
        "entity": "sentiment",
        "label": "negative",
        "start": 0,
        "end": 17,
        "value": "negative"
      },
      {
        "id": 3,
        "entity": "intent",
        "label": "ngilokno",
        "start": 0,
        "end": 17,
        "value": "ngilokno"
      }
    ]
  },
  {
    "input": "bagus cupu banget",
    "entities": [
      {
        "id": 0,
        "entity": "kata",
        "label": "special_person",
        "start": 0,
        "end": 5,
        "value": "bagus"
      },
      {
        "id": 1,
        "entity": "kata",
        "label": "adjective",
        "start": 6,
        "end": 10,
        "value": "cupu"
      },
      {
        "id": 2,
        "entity": "sentiment",
        "label": "negative",
        "start": 0,
        "end": 17,
        "value": "negative"
      },
      {
        "id": 3,
        "entity": "intent",
        "label": "ngilokno",
        "start": 0,
        "end": 17,
        "value": "ngilokno"
      }
    ]
  },
  {
    "input": "bagus cupu sangat",
    "entities": [
      {
        "id": 0,
        "entity": "kata",
        "label": "special_person",
        "start": 0,
        "end": 5,
        "value": "bagus"
      },
      {
        "id": 1,
        "entity": "kata",
        "label": "adjective",
        "start": 6,
        "end": 10,
        "value": "cupu"
      },
      {
        "id": 2,
        "entity": "sentiment",
        "label": "negative",
        "start": 0,
        "end": 17,
        "value": "negative"
      },
      {
        "id": 3,
        "entity": "intent",
        "label": "ngilokno",
        "start": 0,
        "end": 17,
        "value": "ngilokno"
      }
    ]
  },
  {
    "input": "noob banget",
    "entities": [
      {
        "id": 1,
        "entity": "kata",
        "label": "adjective",
        "start": 0,
        "end": 4,
        "value": "noob"
      },
      {
        "id": 1,
        "entity": "sentiment",
        "label": "negative",
        "start": 0,
        "end": 11,
        "value": "negative"
      },
      {
        "id": 2,
        "entity": "intent",
        "label": "ngilokno",
        "start": 0,
        "end": 11,
        "value": "ngilokno"
      }
    ]
  },
  {
    "input": "noob sangat",
    "entities": [
      {
        "id": 1,
        "entity": "kata",
        "label": "adjective",
        "start": 0,
        "end": 4,
        "value": "noob"
      },
      {
        "id": 1,
        "entity": "sentiment",
        "label": "negative",
        "start": 0,
        "end": 11,
        "value": "negative"
      },
      {
        "id": 2,
        "entity": "intent",
        "label": "ngilokno",
        "start": 0,
        "end": 11,
        "value": "ngilokno"
      }
    ]
  },
  {
    "input": "cupu banget",
    "entities": [
      {
        "id": 1,
        "entity": "kata",
        "label": "adjective",
        "start": 0,
        "end": 4,
        "value": "cupu"
      },
      {
        "id": 1,
        "entity": "sentiment",
        "label": "negative",
        "start": 0,
        "end": 11,
        "value": "negative"
      },
      {
        "id": 2,
        "entity": "intent",
        "label": "ngilokno",
        "start": 0,
        "end": 11,
        "value": "ngilokno"
      }
    ]
  },
  {
    "input": "cupu sangat",
    "entities": [
      {
        "id": 1,
        "entity": "kata",
        "label": "adjective",
        "start": 0,
        "end": 4,
        "value": "cupu"
      },
      {
        "id": 1,
        "entity": "sentiment",
        "label": "negative",
        "start": 0,
        "end": 11,
        "value": "negative"
      },
      {
        "id": 2,
        "entity": "intent",
        "label": "ngilokno",
        "start": 0,
        "end": 11,
        "value": "ngilokno"
      }
    ]
  }
]
```
