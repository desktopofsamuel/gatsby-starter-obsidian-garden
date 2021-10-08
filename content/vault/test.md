---
date: 2021-10-07
tags:
- welcome
- design
- OKR
publish: false
---

# Hello

```
exports.createSchemaCustomization = ({ actions }) => { const { createFieldExtension } = actions createFieldExtension({ name: 'motivate', args: { caffeine: 'Int' }, extend(options, prevFieldConfig) { return { type: 'String', args: { sunshine: { type: 'Int', defaultValue: 0, }, }, resolve(source, args, context, info) { const motivation = (options.caffeine || 0) - args.sunshine if (motivation > 5) return 'Work! Work! Work!' return 'Maybe tomorrow.' }, } }, }) }
```