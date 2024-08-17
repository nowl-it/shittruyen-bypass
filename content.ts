import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: [
    "https://cuutruyen.net/*",
    "https://hetcuutruyen.net/*",
    "https://nettrom.com/*",
    "https://cuutruyent9sv7.xyz/*"
  ]
}

const { PLASMO_PUBLIC_BYPASS_API } = process.env

const script = document.createElement("script")
script.textContent = `
  if (typeof window !== "undefined" && typeof window.fetch === "function") {
  const originalFetch = window.fetch

  window.fetch = async (...args) => {
    let [resource, config] = args
    if (typeof resource === "string") {
      resource = "${PLASMO_PUBLIC_BYPASS_API}" + resource
    } else if (resource instanceof Request) {
      resource = new Request(
        "${PLASMO_PUBLIC_BYPASS_API}" + resource.url,
        resource
      )
    }

    const response = await originalFetch(resource, config)
    return response
  }
}
`
document.body.appendChild(script)
