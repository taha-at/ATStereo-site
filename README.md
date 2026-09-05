# ATStereo — Official Website

The official download portal and video-tutorial hub for **[ATStereo](https://github.com/taha-at/ATStereo)**, a 3D Slicer extension for bilateral stereotactic neurosurgical planning and kinematics.

ATStereo is a research / non-commercial licensed medical software module designed for dual stereotactic frame registration, multi-path trajectory simulation, and real-time kinematic calculations in [3D Slicer](https://download.slicer.org).

## About

This repository contains the source code of the ATStereo website. It is a fully static, dependency-free site that provides:

- **Downloads** — links to the latest module release packages on GitHub Releases.
- **Video tutorials** — step-by-step guides for installation/setup and trajectory planning, with an accompanying written walkthrough.
- **Feature overview** — the three core clinical phases of the module:
  1. **Registration** — 4-point landmark alignment of the virtual stereotactic frame to patient CT imaging, with immediate RMSE verification.
  2. **Trajectory planning** — bilateral target/entry point selection with trajectory simulation through the skull and brain.
  3. **Kinematics** — computed local X/Y/Z coordinates, arc angle, and ring angle, with 3D frame visualization and an inter-needle collision guard (< 5.0 mm).
- **Citation** — one-click BibTeX copy for academic use.

## Tech Stack

- Plain **HTML5**, **CSS3**, and **vanilla JavaScript** — no frameworks, no build step, no dependencies.

## Project Structure

```
ATStereo-site/
├── index.html          # Single-page site (overview, downloads, tutorials, citation)
├── css/
│   └── style.css       # Styling, layout, and responsive design
├── js/
│   └── main.js         # Clipboard copy, mobile menu, smooth anchor scrolling
└── assets/
    ├── logo.png        # Full-resolution logo
    ├── logo-256.png    # Logo (256×256, used in header/footer/OG image)
    └── favicon.png     # Browser tab icon
```

## Running Locally

No build or install step is required. Either open `index.html` directly in a browser, or serve the folder (recommended, so fonts and assets load with correct MIME types):

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve .
```

Then visit `http://localhost:8000`.

## Contributing

Issues and pull requests are welcome. For bugs or feature requests related to the **ATStereo module itself**, please open an issue on the [module repository](https://github.com/taha-at/ATStereo).

## Citation

If you use ATStereo in your research, surgical simulations, or publications, please cite the project:

```bibtex
@article{taha2026atstereo,
  title={ATStereo: A 3D Slicer Extension for Bilateral Stereotactic Neurosurgical Planning and Kinematics},
  author={Taha, Abdelrahman},
  year={2026},
  url={https://github.com/taha-at/ATStereo}
}
```

## License

Released under the [ATStereo Research & Non-Commercial Use License](LICENSE) — see the [LICENSE](LICENSE) file for details. Commercial licensing is available on request.

**Medical disclaimer:** ATStereo and this website are intended for research and educational purposes only. They are not certified as a medical device and must not be used for clinical decision-making or patient care.
