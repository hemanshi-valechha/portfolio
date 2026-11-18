"""Build the one-page portfolio resume PDF with selectable text."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


HERE = Path(__file__).resolve().parent
FONTS = HERE / "fonts"
OUTPUT = HERE / "hemanshi_valechha_resume.pdf"

pdfmetrics.registerFont(TTFont("Poppins", str(FONTS / "Poppins-Regular.ttf")))
pdfmetrics.registerFont(TTFont("Poppins-Medium", str(FONTS / "Poppins-Medium.ttf")))
pdfmetrics.registerFont(TTFont("Poppins-Bold", str(FONTS / "Poppins-Bold.ttf")))
pdfmetrics.registerFontFamily("Poppins", normal="Poppins", bold="Poppins-Bold")

PAGE_W, PAGE_H = A4
LEFT = 49
RIGHT = 49
WIDTH = PAGE_W - LEFT - RIGHT
NAVY = colors.HexColor("#17243A")
BLUE = colors.HexColor("#2059C4")
MUTED = colors.HexColor("#516075")
RULE = colors.HexColor("#D9E3EF")

regular = ParagraphStyle(
    "body", fontName="Poppins", fontSize=9.15, leading=13.8,
    textColor=NAVY, alignment=TA_LEFT, spaceAfter=0,
)
bullet_style = ParagraphStyle(
    "bullet", parent=regular, fontSize=9.1, leading=13.7,
)


def paragraph(pdf, text, x, y, width, style=regular):
    item = Paragraph(text, style)
    _, height = item.wrap(width, PAGE_H)
    item.drawOn(pdf, x, y - height)
    return y - height


def heading(pdf, label, y):
    pdf.setFillColor(BLUE)
    pdf.setFont("Poppins-Bold", 9)
    pdf.drawString(LEFT, y, label.upper())
    pdf.setStrokeColor(RULE)
    pdf.setLineWidth(0.8)
    pdf.line(LEFT, y - 7, PAGE_W - RIGHT, y - 7)
    return y - 19


def bullet(pdf, text, y):
    pdf.setFillColor(BLUE)
    pdf.circle(LEFT + 2.4, y - 6.3, 1.55, fill=1, stroke=0)
    return paragraph(pdf, text, LEFT + 13, y, WIDTH - 13, bullet_style) - 3.2


def job(pdf, company, dates, url, points, y):
    pdf.setFillColor(MUTED)
    pdf.setFont("Poppins-Medium", 8.4)
    pdf.drawRightString(PAGE_W - RIGHT, y + 0.6, dates)
    pdf.setFillColor(BLUE)
    pdf.setFont("Poppins-Bold", 9.8)
    pdf.drawString(LEFT, y, company)
    pdf.linkURL(url, (LEFT, y - 2, LEFT + pdfmetrics.stringWidth(company, "Poppins-Bold", 9.8), y + 11), relative=0)
    y -= 15
    for point in points:
        y = bullet(pdf, point, y)
    return y - 20


def education(pdf, degree, school, dates, y):
    pdf.setFillColor(NAVY)
    pdf.setFont("Poppins-Bold", 9.3)
    pdf.drawString(LEFT, y, degree)
    pdf.setFillColor(MUTED)
    pdf.setFont("Poppins-Medium", 8.4)
    pdf.drawRightString(PAGE_W - RIGHT, y, dates)
    y -= 14
    pdf.setFont("Poppins", 8.6)
    pdf.drawString(LEFT, y, school)
    return y - 19


def build():
    pdf = canvas.Canvas(str(OUTPUT), pagesize=A4, pageCompression=1)
    pdf.setTitle("Hemanshi Valechha - Resume")
    pdf.setAuthor("Hemanshi Valechha")

    pdf.setFillColor(BLUE)
    pdf.rect(0, PAGE_H - 7, PAGE_W, 7, fill=1, stroke=0)
    y = PAGE_H - 52
    pdf.setFillColor(NAVY)
    pdf.setFont("Poppins-Bold", 25)
    pdf.drawString(LEFT, y, "Hemanshi Valechha")
    y -= 23
    pdf.setFillColor(BLUE)
    pdf.setFont("Poppins-Medium", 10)
    pdf.drawString(LEFT, y, "FRONTEND & MOBILE DEVELOPER")
    y -= 25

    contacts = [
        ("+91 98256 18764", "tel:+919825618764"),
        ("honeyvalechha46@gmail.com", "mailto:honeyvalechha46@gmail.com"),
        ("Gandhidham, Gujarat", "https://www.google.com/maps/search/?api=1&query=Gandhidham%2C%20Gujarat"),
    ]
    x = LEFT
    pdf.setFont("Poppins", 8.7)
    for i, (label, url) in enumerate(contacts):
        pdf.setFillColor(MUTED)
        pdf.drawString(x, y, label)
        width = pdfmetrics.stringWidth(label, "Poppins", 8.7)
        pdf.linkURL(url, (x, y - 2, x + width, y + 11), relative=0)
        x += width
        if i < len(contacts) - 1:
            pdf.setFillColor(RULE)
            pdf.drawString(x + 12, y, "|")
            x += 29

    y -= 28
    y = heading(pdf, "Profile", y)
    y = paragraph(
        pdf,
        "iOS Developer with 3+ years of experience shipping applications from UI design "
        "through App Store release. Strong in Swift, SwiftUI, UIKit, MVVM, API integration, and offline data. "
        "Work directly with clients and own delivery from requirements to release.",
        LEFT, y, WIDTH,
    ) - 20

    y = heading(pdf, "Technical Skills", y)
    skills = [
        ("iOS & Architecture", "Swift, SwiftUI, UIKit, MVVM, MVC, Combine, Core Data"),
        ("APIs & Tools", "REST APIs, Alamofire, Firebase, MapKit, Xcode, Git, TestFlight"),
        ("Frontend & UI", "HTML, CSS, JavaScript, React, Figma, responsive design"),
        ("Delivery", "App Store Connect, XCTest, Instruments, client collaboration"),
    ]
    for label, value in skills:
        y = paragraph(pdf, f'<b>{label}:</b> {value}', LEFT, y, WIDTH) - 5
    y -= 14

    y = heading(pdf, "Work Experience", y)
    y = job(pdf, "Samyak Tech Labs - Mumbai (Remote)",
            "Jan 2026 - Present", "https://samyaktechlabs.com/", [
                "Built a vehicle management app in SwiftUI with MVVM and Core Data for service, fuel, expense, and document tracking.",
                "Developed two Jain community apps for calendars, festival alerts, member management, donations, and receipts using Combine and Firebase.",
                "Owned UI, testing, App Store submissions, and client feedback through release.",
            ], y)
    y = job(pdf, "Xceltec Interactive Private Limited - Ahmedabad",
            "Jan 2025 - Sep 2025", "https://www.xceltec.com/", [
                "Delivered four connected iOS apps for restaurant POS, customer display, ordering, and delivery workflows.",
                "Integrated Razorpay, Pine Labs, and MapKit for payments and delivery tracking.",
                "Built doctor and patient apps with MVVM and Firebase; reduced crash rate by 40%.",
                "Mentored two junior developers through code reviews and pair programming.",
            ], y)
    y = job(pdf, "Prismetric Pvt Ltd - Ahmedabad",
            "Jan 2023 - Dec 2024", "https://www.prismetric.com/", [
                "Built a service provider marketplace with URLSession, Codable, Core Location, MapKit, push notifications, and StoreKit.",
                "Improved app performance by 60% through lazy loading and memory optimisation.",
            ], y)

    y -= 4
    y = heading(pdf, "Education", y)
    y = education(pdf, "Master of Computer Application (MCA)",
                  "Acharya Motibhai Patel Institute of Computer Studies - CGPA 8.74/10",
                  "2021 - 2023", y)
    y = education(pdf, "Bachelor of Commerce (B.Com)",
                  "Krantiguru Shyamji Krishna Verma Kutch University",
                  "2017 - 2021", y)

    if y < 38:
        raise RuntimeError(f"Resume content overflowed the page: bottom={y:.1f}pt")
    pdf.setStrokeColor(RULE)
    pdf.line(LEFT, 43, PAGE_W - RIGHT, 43)
    pdf.setFillColor(MUTED)
    pdf.setFont("Poppins", 7.4)
    pdf.drawString(LEFT, 29, "Hemanshi Valechha  |  Frontend & Mobile Developer")
    pdf.save()
    print(f"Created {OUTPUT} (content bottom: {y:.1f} pt)")


if __name__ == "__main__":
    build()
