import os

files = {
    'VP': [
        'components/pages/products/virtual-pharmacy/VPHero.tsx',
        'components/pages/products/virtual-pharmacy/VPCTA.tsx'
    ],
    'MD': [
        'components/pages/products/medicine-deliveries/MedicineDeliveriesHero.tsx',
        'components/pages/products/medicine-deliveries/MedicineDeliveriesCTA.tsx'
    ],
    'MP': [
        'components/pages/products/managed-pharmacy/MPHero.tsx',
        'components/pages/products/managed-pharmacy/MPv2PersonaCTA.tsx',
        'components/pages/products/managed-pharmacy/MPv2Solution.tsx',
        'components/pages/products/managed-pharmacy/MPProblemGrid.tsx'
    ],
    'Home': [
        'components/pages/home/MainHero.tsx',
        'components/pages/home/GetStartedCTA.tsx',
        'components/pages/home/SetupWizard.tsx',
        'components/pages/home/persona-roi/index.tsx'
    ],
    'Global': [
        'components/layout/Header.tsx',
        'components/layout/MobileMenu.tsx',
        'components/shared/LandingPageTemplate.tsx'
    ]
}

replacements = {
    'VP': """openModal({
                    badge: "Virtual Pharmacy",
                    title: "Launch your 10-Min Pharmacy.",
                    description: "Schedule a demo to see how we can fulfill your exact prescriptions with zero space required.",
                    btnText: "Schedule Live Demo"
                  })""",
    'MD': """openModal({
                    badge: "Medicine Deliveries",
                    title: "Enable Direct Patient Delivery.",
                    description: "Let us handle the logistics so you can recover lost prescription revenue.",
                    btnText: "Schedule Live Demo"
                  })""",
    'MP': """openModal({
                    badge: "Managed Pharmacy",
                    title: "Start your pharmacy recovery plan.",
                    description: "Fill out the form below to book a free pharmacy audit with our experts.",
                    btnText: "Book My Free Audit"
                  })""",
    'Home': """openModal({
                    badge: "Partnership",
                    title: "Stop your pharmacy leakage.",
                    description: "Book a free audit to see exactly how much revenue your hospital is losing to external chain pharmacies.",
                    btnText: "Book My Free Audit"
                  })""",
    'Global': """openModal({
                    badge: "Partnership",
                    title: "Protect your clinic's revenue.",
                    description: "Book an audit with our experts to see how much margin you can recover.",
                    btnText: "Book My Free Audit"
                  })"""
}

for category, file_list in files.items():
    for f in file_list:
        if not os.path.exists(f): continue
        with open(f, 'r') as file:
            content = file.read()
        
        # We replace the direct reference cases: onClick={openModal}
        content = content.replace("onClick={openModal}", f"onClick={{() => {replacements[category].strip()}}}")
        content = content.replace("onClick={ openModal }", f"onClick={{() => {replacements[category].strip()}}}")
        
        # We replace the invoked cases: openModal()
        content = content.replace("openModal()", replacements[category].strip())
        
        with open(f, 'w') as file:
            file.write(content)

print("CTA patching completed.")
