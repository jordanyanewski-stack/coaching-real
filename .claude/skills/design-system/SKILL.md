---
name: design-system-a-better-you-every-day-mindvalley
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# A Better You, Every day · Mindvalley

## Mission
Deliver implementation-ready design-system guidance for A Better You, Every day · Mindvalley that can be applied consistently across marketing site interfaces.

## Brand
- Product/brand: A Better You, Every day · Mindvalley
- URL: https://www.mindvalley.com/
- Audience: buyers, teams, and decision-makers
- Product surface: marketing site

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=Sharp Grotesk Cyr Medium 20`, `font.family.stack=Sharp Grotesk Cyr Medium 20, Verdana-fallback-3, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=20px`
- Typography scale: `font.size.xs=10px`, `font.size.sm=12px`, `font.size.md=14px`, `font.size.lg=16px`, `font.size.xl=18px`, `font.size.2xl=20px`, `font.size.3xl=24px`, `font.size.4xl=40px`
- Color palette: `color.text.primary=#0f131a`, `color.text.secondary=#595e67`, `color.text.tertiary=#7a12d4`, `color.text.inverse=#71767f`, `color.surface.base=#000000`, `color.surface.muted=#f3f4f6`, `color.surface.raised=#ffffff`, `color.surface.strong=#f9f9f9`
- Spacing scale: `space.1=4px`, `space.2=8px`, `space.3=12px`, `space.4=16px`, `space.5=20px`, `space.6=24px`, `space.7=40px`, `space.8=71.33px`
- Radius/shadow/motion tokens: `radius.xs=4px`, `radius.sm=8px`, `radius.md=128px`, `radius.lg=999px` | `shadow.1=rgb(122, 18, 212) 0px 0px 0px 2px inset`, `shadow.2=rgb(255, 255, 255) 0px 0px 0px 2px inset` | `motion.duration.instant=100ms`, `motion.duration.fast=200ms`, `motion.duration.normal=300ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
concise, confident, implementation-focused

## Rules: Do
- Use semantic tokens, not raw hex values in component guidance.
- Every component must define required states: default, hover, focus-visible, active, disabled, loading, error.
- Responsive behavior and edge-case handling should be specified for every component family.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and tokens.
3. Define component anatomy, variants, and interactions.
4. Add accessibility acceptance criteria.
5. Add anti-patterns and migration notes.
6. End with QA checklist.

## Required Output Structure
- Context and goals
- Design tokens and foundations
- Component-level rules (anatomy, variants, states, responsive behavior)
- Accessibility requirements and testable acceptance criteria
- Content and tone standards with examples
- Anti-patterns and prohibited implementations
- QA checklist

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Prefer system consistency over local visual exceptions.

<!-- TYPEUI_SH_MANAGED_END -->
