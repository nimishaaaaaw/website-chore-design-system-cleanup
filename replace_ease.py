import os
import re

files_to_update = [
    "./components/pages/products/medicine-deliveries/MedicineDeliveriesProblem.tsx",
    "./components/pages/products/medicine-deliveries/MedicineDeliveriesCTA.tsx",
    "./components/pages/products/medicine-deliveries/MedicineDeliveriesEconomics.tsx",
    "./components/pages/products/medicine-deliveries/MedicineDeliveriesImpact.tsx",
    "./components/pages/products/managed-pharmacy/MPProblemGrid.tsx",
    "./components/pages/products/managed-pharmacy/MPv2Solution.tsx",
    "./components/pages/products/managed-pharmacy/MPv2PersonaCTA.tsx",
    "./components/pages/products/managed-pharmacy/MPv2Timeline.tsx",
    "./components/pages/products/managed-pharmacy/MPv2FAQ.tsx",
    "./components/pages/products/virtual-pharmacy/VPFAQ.tsx",
    "./components/pages/products/virtual-pharmacy/VPCTA.tsx",
    "./components/pages/products/virtual-pharmacy/VPNerveCenter.tsx",
    "./components/pages/products/virtual-pharmacy/VPComparison.tsx",
    "./components/pages/products/virtual-pharmacy/VPSolution.tsx",
    "./components/pages/products/virtual-pharmacy/VPProblem.tsx",
    "./components/pages/solutions/clinic-without-pharmacy/ClinicCTA.tsx",
    "./components/pages/solutions/clinic-without-pharmacy/ClinicWhatChanges.tsx",
    "./components/pages/solutions/clinic-without-pharmacy/ClinicInsightShift.tsx",
    "./components/pages/solutions/clinic-without-pharmacy/ClinicEmotionalClose.tsx",
    "./components/pages/solutions/clinic-without-pharmacy/ClinicHowItWorks.tsx",
    "./components/pages/solutions/clinic-without-pharmacy/ClinicHiddenLoss.tsx"
]

import_statement = "import { premiumEase } from '@/lib/animation';\n"

for filepath in files_to_update:
    with open(filepath, 'r') as f:
        content = f.read()

    # Remove all declarations of premiumEase
    # Note: there might be different variations like:
    # const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];
    # const premiumEase = [0.16, 1, 0.3, 1] as any;
    # const premiumEase = [0.16, 1, 0.3, 1] as const;
    # const premiumEase = [0.16, 1, 0.3, 1];

    # Regex to match the declaration line
    pattern = re.compile(r'^const premiumEase[^;]+;\n?', re.MULTILINE)

    new_content = pattern.sub('', content)

    # Add import statement after the last import
    # Find last import statement
    lines = new_content.split('\n')
    last_import_index = -1
    for i, line in enumerate(lines):
        if line.startswith('import '):
            last_import_index = i

    if last_import_index != -1:
        lines.insert(last_import_index + 1, import_statement.strip())
    else:
        lines.insert(0, import_statement.strip())

    new_content = '\n'.join(lines)

    with open(filepath, 'w') as f:
        f.write(new_content)
