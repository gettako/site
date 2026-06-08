---
layout: home

hero:
  name: Tako
  text: The missing framework for Go terminal apps.
  tagline: A structured foundation for Go terminal applications. It provides dependency injection, an event bus, and a plugin system, while staying completely UI-agnostic.
  actions:
    - theme: brand
      text: Get Started →
      link: /docs/overview
    - theme: alt
      text: View on GitHub
      link: https://github.com/takoterm/tako

---


<HomeStats />

<HomeArchitecture />

<HomeFeatures />

<HomeExecutionPaths />

<HomePluginEcosystem>

<template #manifest>

```go
func (p *Plugin) Register() tako.Manifest {
  return tako.Manifest{
    Name: "my-plugin",
    Deps: []string{"logger"},
  }
}
```

</template>

<template #boot>

```go
func init() {
  tako.RegisterPlugin(&Plugin{})
}
```

</template>

<template #logic>

```go
func (p *Plugin) Boot(app tako.App) {
  app.EventBus().On("search", p.onSearch)
}
```

</template>

</HomePluginEcosystem>

<HomeQuickStart>

<template #bubbletea>

```go
package main

import (
    "log"

    "github.com/takoterm/tako"
    "github.com/takoterm/tako/contracts"
    "github.com/takoterm/tako/pkg/adapter/bubbletea"
)

func main() {
    app := tako.NewApp()

    app.Keys().Bind("ctrl+c", func() {
        app.Shutdown()
    })

    // Use the official Bubble Tea adapter — the most popular
    // Go TUI library is supported out of the box.
    app.Container().Singleton(
        new(contracts.UIRenderer),
        bubbletea.NewAdapter(app.Context(), app.EventBus(), app.Router(), &myLayout{}),
    )

    if err := tako.Run(app); err != nil {
        log.Fatalf("tako: %v", err)
    }
}
```

</template>

<template #custom>

```go
package main

import (
    "log"

    "github.com/takoterm/tako"
    "github.com/takoterm/tako/contracts"
)

// MyAdapter wraps any terminal library (tview, tcell, termbox…)
type MyAdapter struct{}

func (a *MyAdapter) Render() error {
    // Hand control to your UI library. Must block until exit.
    return nil // e.g. return myApp.Run()
}

func (a *MyAdapter) Stop() error {
    // Release the terminal on shutdown.
    return nil
}

func main() {
    app := tako.NewApp()

    app.Keys().Bind("ctrl+c", func() {
        app.Shutdown()
    })

    // Register your own UIRenderer — any library, any renderer.
    app.Container().Singleton(new(contracts.UIRenderer), &MyAdapter{})

    if err := tako.Run(app); err != nil {
        log.Fatalf("tako: %v", err)
    }
}
```

</template>

</HomeQuickStart>

<HomeComparison />

<HomeFAQ />

<HomeCTA />

<HomeFooter />
