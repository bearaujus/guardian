# CLI Installation

There are several approaches to install Guardian CLI

1. [Using a pre-compiled binary](#binary-cross-platform)
2. [Installing with package manager](#macOS)
3. [Installing from source](#building-from-source)
4. [Using the Docker image](#use-the-docker-image)

#### Binary (Cross-platform)

Download the appropriate version for your platform from [releases](https://github.com/odpf/guardian/releases) page. Once downloaded, the binary can be run from anywhere.
You don’t need to install it into a global location. This works well for shared hosts and other systems where you don’t have a privileged account.
Ideally, you should install it somewhere in your PATH for easy use. `/usr/local/bin` is the most probable location.

#### macOS

`guardian` is available via a Homebrew Tap, and as downloadable binary from the [releases](https://github.com/odpf/guardian/releases/latest) page:

```sh
brew install odpf/tap/guardian
```

To upgrade to the latest version:

```
brew upgrade guardian
```

Check for installed guardian version

```sh
guardian version
```

#### Linux

`guardian` is available as downloadable binaries from the [releases](https://github.com/odpf/guardian/releases/latest) page. Download the `.deb` or `.rpm` from the releases page and install with `sudo dpkg -i` and `sudo rpm -i` respectively.

#### Windows

`guardian` is available via [scoop](https://scoop.sh/), and as a downloadable binary from the [releases](https://github.com/odpf/guardian/releases/latest) page:

```
scoop bucket add guardian https://github.com/odpf/scoop-bucket.git
```

To upgrade to the latest version:

```
scoop update guardian
```

### Building from source

#### Prerequisites

Guardian requires the following dependencies:

- Golang (version 1.17 or above)
- Git

#### Build

Run either of the following commands to clone and compile Guardian from source

```sh
$ git clone git@github.com:odpf/guardian.git  (Using SSH Protocol) Or
$ git clone https://github.com/odpf/guardian.git (Using HTTPS Protocol)
```

Install all the golang dependencies

```
make setup
```

Build guardian binary file

```
make build
```

Init server config. Customise with your local configurations.

```
make config
```

Run database migrations

```
./guardian server migrate -c config.yaml
```

Start guardian server

```
./guardian server start -c config.yaml
```

Initialise client configurations

```
./guardian config init
```

### Verifying the installation​

To verify if Guardian is properly installed, run `guardian --help` on your system. You should see help output. If you are executing it from the command line, make sure it is on your PATH or you may get an error about Guardian not being found.

```
$ guardian --help
```

### Use the Docker image

We provide ready to use Docker container images. To pull the latest image:

```
docker pull odpf/guardian:latest
```

To pull a specific version:

```
docker pull odpf/guardian:v0.3.2
```

If you like to have a shell alias that runs the latest version of pscale from docker whenever you type `pscale`:

```
mkdir -p $HOME/.config/odpf
alias guardian="docker run -e HOME=/tmp -v $HOME/.config/odpf:/tmp/.config/odpf --user $(id -u):$(id -g) --rm -it -p 3306:3306/tcp odpf/guardian:latest"
```

### CLI Reference

See the [CLI Reference](/docs/reference/cli) for a complete list of commands and options.