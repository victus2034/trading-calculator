# Design QA

- Source visual truth: `C:\Users\shiva\Downloads\Oversized Pages copy.pdf`
- Charge source data: `C:\Users\shiva\Downloads\FuturesHistory_2039396576_2026-07-01_2026-07-16.xlsx`, `Trades!A1:K17`
- Rendered implementation: `tmp/maximum-charge-result.png`
- Combined comparison: `tmp/design-comparison.png`
- Viewport: 403px browser content width for the maximum-charge result; previously verified at 1365 x 900 desktop and 390 x 844 mobile
- State: Crypto, maximum observed 0.30% all-in fee profile, Buy / Long, USD 250 maximum loss, USD 1,000 maximum trade amount, blank entry price, 0.5% stop-loss, 1% target

## Full-view comparison evidence

The PDF is a functional sketch rather than a visual UI specification. Browser evidence confirms that every requested concept is visible without requiring entry price: percentage-based stop-loss, a USD 250 maximum-loss cap, calculated capital to use, percentage target/stop levels, and both target and stop outcomes. The implementation intentionally retains the repository's calculator product structure instead of reproducing the handwritten visual style.

## Focused-region comparison evidence

A separate crop was not required because the source handwriting and implementation fields are readable at original resolution. Workbook analysis found a highest positive commission rate of 0.299993%, rounded conservatively to 0.30% per order. Browser states verified target-path charges of USD 0.60, USD 1.21, and USD 6.03 for USD 100, USD 200, and USD 1,000 trades respectively; the small difference from a flat round trip reflects the 1% higher target exit value.

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
- Blank-entry risk mode: passed and returns capital to use without requesting trade price.
- Optional-entry enhancement: passed and returns exact quantity plus TP/SL prices when a price is supplied.
- Maximum trade amount: passed at USD 100, USD 200, and USD 1,000 with blank entry price.
- Conservative CoinSwitch charges: passed with the workbook-derived 0.30% all-in maximum on both entry and exit. No additional GST is added, preventing double counting of exported Commission; funding is explicitly excluded.
- Capital and leverage mode: passed with INR 10,000 capital, 5x leverage, and INR 1,000 entry.
- Theme switching: passed.
- Responsive desktop and mobile layouts: passed with no horizontal overflow.
- Browser console errors: none.
- Primary interactions tested: market selection, sizing-mode selection, number entry, calculation submission, result rendering, theme switching, and responsive layout.

## Implementation checklist

- [x] Maximum-loss risk sizing
- [x] Capital-to-use result without entry price
- [x] Optional entry price for exact quantity and price levels
- [x] Optional maximum trade amount cap
- [x] Conservative maximum CoinSwitch charge derived from full trade history
- [x] Position value and quantity
- [x] Stop-loss and target prices
- [x] Profit, loss, charges, and risk/reward
- [x] Original capital/leverage mode preserved
- [x] Desktop and mobile verification

## Follow-up polish

No blocking follow-up items.

final result: passed
