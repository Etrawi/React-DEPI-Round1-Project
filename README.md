# 🏥 MediBook - Medical Booking Platform

**MediBook** is a comprehensive medical booking platform (similar to Vezeeta) designed to bridge the gap between patients and healthcare providers. It facilitates booking appointments, managing clinic schedules, and streamlining the healthcare process.

> **Current Phase:** Phase 1 - Static UI/UX Design (HTML/CSS/Bootstrap).

---

## 🛠️ Tech Stack (Current Phase)

- **Structure:** HTML5 (Semantic Elements)
- **Styling:** CSS3, Bootstrap 5 (Bootswatch Pulse Theme)
- **Icons:** FontAwesome 6
- **Version Control:** Git & GitHub

---

## 📂 Project Structure

The project follows a modular structure to ensure scalability and organization:

```text
MEDIBOOK/
├── static-design/
│   ├── index.html           # Landing Page (Entry Point)
│   ├── auth/                # Shared Components (Navbar, Footer)
│   ├── assets/              # Static Assets
│   │   ├── css/             # Custom Styles (layout, responsive, main)
│   │   ├── js/              # Script files
│   │   └── images/          # Organized images (doctors, patients, logos)
│   ├── patient/             # Patient Portal (Booking, Search, Profile)
│   ├── doctor/              # Doctor Dashboard & Management
│   └── admin/               # Admin Control Panel


🚀 How to Run

Since this is the Static Design Phase, no server or database installation is required.

Clone the repository:

Bash
git clone [https://github.com/Etrawi/depi-medibook.git](https://github.com/Etrawi/depi-medibook.git)
Navigate to the project folder:

Bash
cd depi-medibook/static-design
Run the project:

Simply double-click on index.html to open it in your browser.

Or use the VS Code "Live Server" extension for a better experience.

🤝 Team Workflow (Contribution Guidelines)
To maintain a clean repository, please follow these rules strictly:

1. Branching Strategy
main: Production-ready code only (Clean Delivery). Do NOT push here directly.

development: The main working branch. All features merge here first.

Feature Branches: Create a new branch for every task.

Naming convention: feature/task-name (e.g., feature/login-page, design/doctor-dashboard).

2. How to Contribute
Pull Latest Changes:

Bash
git checkout development
git pull origin development
Create Your Branch:

Bash
git checkout -b feature/your-task-name
Coding Standards:

Use the Navbar and Footer code located in static-design/auth/.

Use Bootstrap 5 classes for layout and spacing.

Ensure all images are placed in static-design/assets/images/.

Push & Pull Request:

Bash
git push origin feature/your-task-name
Go to GitHub and open a Pull Request (PR) targeting the development branch.

👨‍💻 Development Team
Team Leader: Anwar Mohamed

Team Members:

[ Eng. Mohamed Aziz ]

[ Eng. ANWR MOHAMED ]

[👤Eng. Abdelrhman Khalifa ]

[👤Eng. Alaa Mohamed ]

[👤Eng. Nourhan Abdelrahman ]

© 2026 MediBook Project | DEPI Graduation Project


MEDIBOOK/
│
├──static-design/
│
│
├──admin/
│       ├── admin-profile.html                  # (متروك فارغ حالياً للمستقبل)
│       ├── booking-details.html                # (متروك فارغ حالياً للمستقبل)
│       ├── booking-list.html                   # (متروك فارغ حالياً للمستقبل)
│       ├── dashboard.html                      # (متروك فارغ حالياً للمستقبل)
│       ├── doctor-application-details.html     # (متروك فارغ حالياً للمستقبل)
│       ├── doctor-applications.html            # (متروك فارغ حالياً للمستقبل)
│       ├── doctor-profile.html                 # (متروك فارغ حالياً للمستقبل)
│       ├── doctors-management.html             # (متروك فارغ حالياً للمستقبل)
│       ├── login.html                          # (متروك فارغ حالياً للمستقبل)
│       ├── logout.html                         # (متروك فارغ حالياً للمستقبل)
│       ├── patient-details.html                # (متروك فارغ حالياً للمستقبل)
│       ├── patients-list.html                  # (متروك فارغ حالياً للمستقبل)
│       ├── payment-details.html                # (متروك فارغ حالياً للمستقبل)
│       ├── payment-overview.html               # (متروك فارغ حالياً للمستقبل)
│       ├── specialties-management.html         # (متروك فارغ حالياً للمستقبل)
│       └── system-settings.html                # (متروك فارغ حالياً للمستقبل)
│
├──assets/
│       ├──css/
│       │     ├── components.css                # (متروك فارغ حالياً للمستقبل)
│       │     ├── layout.css                    # (متروك فارغ حالياً للمستقبل)
│       │     ├── main.css                      # (متروك فارغ حالياً للمستقبل)
│       │     ├── responsive.css                # (متروك فارغ حالياً للمستقبل)
│       │     └── style.css                     # (متروك فارغ حالياً للمستقبل)
│       │
│       ├──images/                              # (يتم وضع الصور هنا)
│       │     │
│       │     ├── admin/                        # (متروك فارغ حالياً للمستقبل)
│       │     ├── doctor/                       # (متروك فارغ حالياً للمستقبل)
│       │     ├── logos/                        # (متروك فارغ حالياً للمستقبل)
│       │     │        │
│       │     │        ├── doctor-logo-transparent.png
│       │     │        ├── doctors-logo.png
│       │     │        ├── medibook-logo-transparent.png
│       │     │        └── medibook-logo.png
│       │     │
│       │     └── patient/
│       │
│       │
│       └──js/                                  # (متروك فارغ حالياً للمستقبل)
│
├──auth/
│       ├── admin-sidebar.html                  # (متروك فارغ حالياً للمستقبل)
│       ├── footer.html                         # (متروك فارغ حالياً للمستقبل)
│       └── navbar.html                         # (متروك فارغ حالياً للمستقبل)
│
│
│
├──doctor/
│        ├── appointment-details.html           # (متروك فارغ حالياً للمستقبل)
│        ├── appointments.html                  # (متروك فارغ حالياً للمستقبل)
│        ├── availability-setup.html            # (متروك فارغ حالياً للمستقبل)
│        ├── consultation-setup.html            # (متروك فارغ حالياً للمستقبل)
│        ├── dashboard.html                     # (متروك فارغ حالياً للمستقبل)
│        ├── doctor-landing.html                # (متروك فارغ حالياً للمستقبل)
│        ├── doctor-login.html                  # (متروك فارغ حالياً للمستقبل)
│        ├── doctor-profile-setup.html          # (متروك فارغ حالياً للمستقبل)
│        ├── doctor-signup.html                 # (متروك فارغ حالياً للمستقبل)
│        ├── earnings.html                      # (متروك فارغ حالياً للمستقبل)
│        ├── logout.html                        # (متروك فارغ حالياً للمستقبل)
│        ├── manage-availability.html           # (متروك فارغ حالياً للمستقبل)
│        ├── payment-info.html                  # (متروك فارغ حالياً للمستقبل)
│        ├── pending-approval.html              # (متروك فارغ حالياً للمستقبل)
│        ├── pricing-setup.html                 # (متروك فارغ حالياً للمستقبل)
│        ├── profile-management.html            # (متروك فارغ حالياً للمستقبل)
│        ├── review-submit.html                 # (متروك فارغ حالياً للمستقبل)
│        └── settings.html                      # (متروك فارغ حالياً للمستقبل)
│
│
├──patient/
│        ├── appointment-details.html           # (متروك فارغ حالياً للمستقبل)
│        ├── booking-confirmation.html          # (متروك فارغ حالياً للمستقبل)
│        ├── booking-summary.html               # (متروك فارغ حالياً للمستقبل)
│        ├── cancel-appointment.html            # (متروك فارغ حالياً للمستقبل)
│        ├── doctor-profile.html                # (متروك فارغ حالياً للمستقبل)
│        ├── guest-details.html                 # (متروك فارغ حالياً للمستقبل)
│        ├── login.html                         # (متروك فارغ حالياً للمستقبل)
│        ├── my-appointments.html               # (متروك فارغ حالياً للمستقبل)
│        ├── online-payment.html                # (متروك فارغ حالياً للمستقبل)
│        ├── patient-home.html                  # (متروك فارغ حالياً للمستقبل)
│        ├── patient-search.html                # (متروك فارغ حالياً للمستقبل)
│        ├── payment-method.html                # (متروك فارغ حالياً للمستقبل)
│        ├── rate-doctor.html                   # (متروك فارغ حالياً للمستقبل)
│        ├── reschedule-appointment.html        # (متروك فارغ حالياً للمستقبل)
│        ├── select-consultation.html           # (متروك فارغ حالياً للمستقبل)
│        └── signup.html                        # (متروك فارغ حالياً للمستقبل)
│
│
├──index.html                                   # الصفحة الرئيسية
│
└──README.md
```
