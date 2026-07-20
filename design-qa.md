# Design QA

- Source visual truth: `C:\Users\shiva\Downloads\Oversized Pages copy.pdf`
- Rendered implementation: `tmp/desktop-result-final.png`
- Combined comparison: `tmp/design-comparison.png`
- Viewport: 1365 x 900 desktop; 390 x 844 mobile
- State: Crypto, Buy / Long, USD 250 maximum loss, 1000 entry, 0.5% stop-loss, 1% target

## Full-view comparison evidence

The PDF is a functional sketch rather than a visual UI specification. The combined comparison confirms that every requested concept is visible in one workflow: percentage-based stop-loss, a USD 250 maximum-loss cap, calculated position value, target price, stop-loss price, and both target and stop outcomes. The implementation intentionally retains the repository's calculator product structure instead of reproducing the handwritten visual style.

## Focused-region comparison evidence

A separate crop was not required because the source handwriting and the implementation's input/result fields are readable at original resolution in `tmp/design-comparison.png`. The critical values were also verified from the browser-rendered DOM: USD 46,304.87 position value, USD 995.00 stop, USD 1,010.00 target, USD 250.00 estimated loss, and USD 444.43 estimated profit after charges.

## Required fidelity surfaces

- Fonts and typography: Native UI font stack is legible at desktop and mobile sizes; headings, labels, helper text, and result hierarchy wrap without clipping.
- Spacing and layout rhythm: Two-column desktop layout and single-column mobile layout retain clear section grouping. Cards, controls, and results have consistent padding and alignment.
- Colors and visual tokens: Light and dark palettes use semantic positive, negative, brand, border, and focus tokens with readable contrast.
- Image quality and asset fidelity: The source contains no production image assets or icons to reproduce. No placeholder imagery, CSS art, custom SVG, or substitute icons were introduced.
- Copy and content: The workflow uses the PDF's maximum-loss, stop-loss percentage, target percentage, position amount, and TP/SL result concepts in clear trading terminology.
- Accessibility and interactions: Inputs have labels, form controls are keyboard-native, focus states are visible, validation uses an alert region, and mobile controls retain practical tap sizes.

## Findings

No actionable P0, P1, or P2 differences remain. The source does not define a production visual design, so visual styling is an intentional extension of the existing calculator rather than a fidelity mismatch.

## Comparison history

1. P2 - Desktop horizontal overflow. The visually hidden sizing-mode radio inputs inherited the global `width: 100%`, increasing document width from 1350px to 1499px. Fixed by constraining each hidden radio to 1px. Post-fix browser evidence reports `scrollWidth` equal to `clientWidth` at both desktop and mobile sizes.
2. P2 - Mobile header copy was narrower than necessary. Added a flexible, zero-min-width header content column. Post-fix mobile capture shows clean wrapping with no horizontal overflow.

## Browser verification

- Risk-based mode: passed with charges included inside the USD 250 cap.
- Capital and leverage mode: passed with INR 10,000 capital, 5x leverage, and INR 1,000 entry.
- Theme switching: passed.
- Responsive desktop and mobile layouts: passed with no horizontal overflow.
- Browser console errors: none.
- Primary interactions tested: market selection, sizing-mode selection, number entry, calculation submission, result rendering, theme switching, and responsive layout.

## Implementation checklist

- [x] Maximum-loss risk sizing
- [x] Position value and quantity
- [x] Stop-loss and target prices
- [x] Profit, loss, charges, and risk/reward
- [x] Original capital/leverage mode preserved
- [x] Desktop and mobile verification

## Follow-up polish

No blocking follow-up items.

final result: passed
