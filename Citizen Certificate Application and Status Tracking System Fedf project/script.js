// System Application State Variables
let activeAuthenticatedSession = JSON.parse(localStorage.getItem('currentUser')) || null;
let persistentFileBlobPointer = "";
let persistentFilePreviewUrl = ""; 

// --- Module 3: Navigation Bar & Routing Engine Implementation ---
function switchView(viewId) {
    document.querySelectorAll('.app-view-panel').forEach(view => {
        view.classList.remove('active-panel');
    });
    const targetedWorkspace = document.getElementById(`${viewId}-view`);
    if (targetedWorkspace) targetedWorkspace.classList.add('active-panel');

    document.querySelectorAll('nav a').forEach(navLink => {
        navLink.classList.remove('active-link');
        if (navLink.getAttribute('onclick') === `switchView('${viewId}')`) {
            navLink.classList.add('active-link');
        }
    });
    
    if (viewId === 'admin') {
        renderAdminControlTable();
    }
    
    rebuildDynamicNavigationBar();
}

function rebuildDynamicNavigationBar() {
    const linkListRoot = document.getElementById('navigation-root-links');
    if (!activeAuthenticatedSession) {
        linkListRoot.innerHTML = `
            <li><a onclick="switchView('home')">Home Hub</a></li>
            <li><a onclick="switchView('track')">Track Status Desk</a></li>
            <li><a onclick="switchView('auth')" class="active-link">Access Gate</a></li>
        `;
    } else {
        if (activeAuthenticatedSession.role === 'admin') {
            linkListRoot.innerHTML = `
                <li><a onclick="switchView('home')">Home Hub</a></li>
                <li><a onclick="switchView('admin')">Admin Control Desk</a></li>
                <li><span style="font-size:0.88rem; color:#F77F00; padding-right:5px;"><i class="fa-solid fa-user-shield"></i> <b>Admin Mode</b></span></li>
                <li><a onclick="executeLogoutProcedure()" class="nav-logout-btn">Exit Portal</a></li>
            `;
        } else {
            linkListRoot.innerHTML = `
                <li><a onclick="switchView('home')">Home Hub</a></li>
                <li><a onclick="switchView('track')">Track Status Desk</a></li>
                <li><span style="font-size:0.88rem; color:#64748B; padding-right:5px;">ID: <b>${activeAuthenticatedSession.name}</b></span></li>
                <li><a onclick="executeLogoutProcedure()" class="nav-logout-btn">Exit Portal</a></li>
            `;
        }
    }
}

// --- Module 1: User Registration & Login Module Logics ---
function toggleAuthContext(mode) {
    document.getElementById('tab-login').classList.toggle('active-tab', mode === 'login');
    document.getElementById('tab-register').classList.toggle('active-tab', mode === 'register');
    document.getElementById('auth-login-subform').style.display = mode === 'login' ? 'block' : 'none';
    document.getElementById('auth-register-subform').style.display = mode === 'register' ? 'block' : 'none';
}

function executeUserRegistration(e) {
    e.preventDefault();
    const name = document.getElementById('input-reg-name').value;
    const email = document.getElementById('input-reg-email').value;
    const pass = document.getElementById('input-reg-pass').value;

    if (pass.length < 6) {
        alert('Security rule broken: Access Key parameter must contain at least 6 characters.');
        return;
    }

    if (email.toLowerCase() === 'admin@gov.in') {
        alert('System protected identifier value registration sequence blocked.');
        return;
    }

    let usersList = JSON.parse(localStorage.getItem('users')) || [];
    if (usersList.find(userObj => userObj.email === email)) {
        alert('Conflict error. This electronic identity pointer exists in registry records.');
        return;
    }

    usersList.push({ name, email, password: pass, role: 'citizen' });
    localStorage.setItem('users', JSON.stringify(usersList));
    
    alert('Identity record committed. Injecting localized gateway authorization matrix.');
    activeAuthenticatedSession = { name, email, role: 'citizen' };
    localStorage.setItem('currentUser', JSON.stringify(activeAuthenticatedSession));
    document.getElementById('auth-register-subform').reset();
    switchView('home');
}

function executeUserLogin(e) {
    e.preventDefault();
    const email = document.getElementById('input-login-email').value.trim();
    const pass = document.getElementById('input-login-pass').value;

    if (email.toLowerCase() === 'admin@gov.in' && pass === 'admin123') {
        activeAuthenticatedSession = { name: 'System Administrator', email: 'admin@gov.in', role: 'admin' };
        localStorage.setItem('currentUser', JSON.stringify(activeAuthenticatedSession));
        document.getElementById('auth-login-subform').reset();
        switchView('admin');
        return;
    }

    let usersList = JSON.parse(localStorage.getItem('users')) || [];
    const targetedCitizen = usersList.find(u => u.email === email && u.password === pass);

    if (targetedCitizen) {
        activeAuthenticatedSession = { name: targetedCitizen.name, email: targetedCitizen.email, role: 'citizen' };
        localStorage.setItem('currentUser', JSON.stringify(activeAuthenticatedSession));
        document.getElementById('auth-login-subform').reset();
        switchView('home');
    } else {
        alert('Identity validation faulted. Verify authorization security keys.');
    }
}

// --- Module 4 & 5: Application Form Interactions & Document Upload Processing ---
function initiateApplicationForm(targetCertificateClassType) {
    if (!activeAuthenticatedSession) {
        alert('Authentication required. Verify state profile clearance before viewing certificate application matrices.');
        switchView('auth');
        return;
    }
    if (activeAuthenticatedSession.role === 'admin') {
        alert('Administrative sessions cannot register individual civic certificate declaration forms.');
        return;
    }
    document.getElementById('internal-form-type-state').value = targetCertificateClassType;
    document.getElementById('dynamic-form-header').innerText = `${targetCertificateClassType} Registry Entry`;
    persistentFileBlobPointer = "";
    persistentFilePreviewUrl = "";
    document.getElementById('file-upload-feedback-render').innerHTML = "";
    document.getElementById('core-application-form').reset();
    switchView('apply');
}

function processMockUploadSelection(e) {
    const fileDescriptor = e.target.files[0];
    if (fileDescriptor) {
        persistentFileBlobPointer = fileDescriptor.name;
        
        const imageParser = new FileReader();
        imageParser.onload = function(eventResult) {
            persistentFilePreviewUrl = eventResult.target.result; 
            document.getElementById('file-upload-feedback-render').innerHTML = `
                <div class="mock-upload-pill">
                    <span><i class="fa-solid fa-file-shield"></i> File payload isolated: ${fileDescriptor.name}</span>
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <div style="margin-top:10px; text-align:center;">
                    <img src="${persistentFilePreviewUrl}" style="max-width:120px; border-radius:6px; border:1px solid #CBD5E1; box-shadow:0 2px 5px rgba(0,0,0,0.05);">
                </div>
            `;
        };
        imageParser.readAsDataURL(fileDescriptor);
    }
}

// --- Module 6: Application Submission & ID Generation Engine ---
function commitApplicationSubmission(e) {
    e.preventDefault();
    if (!persistentFileBlobPointer) {
        alert('Filing runtime aborted. Link physical verification documents before finalizing file operations.');
        return;
    }

    const activeTargetType = document.getElementById('internal-form-type-state').value;
    const targetApplicantName = document.getElementById('form-field-fullname').value;
    const targetNationalId = document.getElementById('form-field-nationalid').value;
    const targetPhone = document.getElementById('form-field-phone').value;
    const targetAddress = document.getElementById('form-field-address').value;
    
    const calculatedTrackingId = 'CERT-' + Math.floor(100000 + Math.random() * 900000);

    const compositeApplicationPayload = {
        id: calculatedTrackingId,
        userEmail: activeAuthenticatedSession.email,
        type: activeTargetType,
        applicantName: targetApplicantName,
        nationalId: targetNationalId,
        phone: targetPhone,
        address: targetAddress,
        attachedFileName: persistentFileBlobPointer,
        fileDataStream: persistentFilePreviewUrl, 
        date: new Date().toLocaleDateString(),
        status: 'Submitted'
    };

    let indexCollection = JSON.parse(localStorage.getItem('applications')) || [];
    indexCollection.push(compositeApplicationPayload);
    localStorage.setItem('applications', JSON.stringify(indexCollection));

    alert(`Filing committed successfully!\nTracking Key Issued: ${calculatedTrackingId}\nThis code has been pinned to your profile tracking view.`);
    document.getElementById('core-application-form').reset();
    
    switchView('track');
    document.getElementById('search-tracking-id-field').value = calculatedTrackingId;
    searchApplicationRegistry();
}

// --- Module 7 & 8: Status Tracking System & Progress Timeline Dashboard ---
function searchApplicationRegistry() {
    const lookUpToken = document.getElementById('search-tracking-id-field').value.trim();
    let entries = JSON.parse(localStorage.getItem('applications')) || [];
    const selectedEntry = entries.find(app => app.id === lookUpToken);

    const displayCardElement = document.getElementById('tracking-results-card');
    if (!selectedEntry) {
        alert('Search query failed. Tracking index token match index returned invalid state responses.');
        displayCardElement.style.display = 'none';
        return;
    }

    displayCardElement.style.display = 'block';
    document.getElementById('view-render-type').innerText = selectedEntry.type;
    document.getElementById('view-render-id').innerText = selectedEntry.id;
    document.getElementById('view-render-name').innerText = selectedEntry.applicantName;
    document.getElementById('view-render-date').innerText = selectedEntry.date;

    const pillElement = document.getElementById('view-render-pill');
    pillElement.innerText = selectedEntry.status;
    
    document.getElementById('node-stage-1').classList.remove('node-filled');
    document.getElementById('node-stage-2').classList.remove('node-filled');
    document.getElementById('node-stage-3').classList.remove('node-filled');
    
    // Reset final node display text rules
    const stage3Text = document.getElementById('node-stage-3-text');
    stage3Text.innerText = "Issued & Final";
    stage3Text.style.color = "#475569";

    const internalGaugeBar = document.getElementById('js-timeline-progress-indicator');
    internalGaugeBar.style.backgroundColor = "var(--success-green)"; // Reset path color
    
    if (selectedEntry.status === 'Submitted') {
        pillElement.className = "status-pill st-submitted";
        document.getElementById('node-stage-1').classList.add('node-filled');
        internalGaugeBar.style.width = '0%';
    } else if (selectedEntry.status === 'Under Review') {
        pillElement.className = "status-pill st-review";
        document.getElementById('node-stage-1').classList.add('node-filled');
        document.getElementById('node-stage-2').classList.add('node-filled');
        internalGaugeBar.style.width = '50%';
    } else if (selectedEntry.status === 'Approved') {
        pillElement.className = "status-pill st-approved";
        document.getElementById('node-stage-1').classList.add('node-filled');
        document.getElementById('node-stage-2').classList.add('node-filled');
        document.getElementById('node-stage-3').classList.add('node-filled');
        internalGaugeBar.style.width = '100%';
    } else if (selectedEntry.status === 'Rejected') {
        pillElement.className = "status-pill";
        pillElement.style.backgroundColor = "#E63946"; // Red color override
        
        // Highlight path up to stage 2, then lock terminal node to rejected state
        document.getElementById('node-stage-1').classList.add('node-filled');
        document.getElementById('node-stage-2').classList.add('node-filled');
        
        const node3 = document.getElementById('node-stage-3');
        node3.style.borderColor = "#E63946";
        node3.style.backgroundColor = "#E63946";
        node3.style.color = "#FFFFFF";
        node3.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        
        stage3Text.innerText = "Application Rejected";
        stage3Text.style.color = "#E63946";
        
        internalGaugeBar.style.width = '100%';
        internalGaugeBar.style.backgroundColor = "#E63946"; // Color path gauge red
    }
}

// --- Administrative Queue Pipeline State Modification Controllers ---
function renderAdminControlTable() {
    const tableBody = document.getElementById('admin-table-body');
    let entries = JSON.parse(localStorage.getItem('applications')) || [];
    
    if (entries.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:20px; color:#64748B;">No record queues found in system LocalStorage database.</td></tr>`;
        return;
    }

    tableBody.innerHTML = '';
    entries.forEach(app => {
        let statusClass = app.status === 'Submitted' ? 'st-submitted' : (app.status === 'Under Review' ? 'st-review' : (app.status === 'Approved' ? 'st-approved' : ''));
        let inlineStyle = app.status === 'Rejected' ? 'style="background-color: #E63946; color: white;"' : '';
        
        tableBody.innerHTML += `
            <tr style="border-bottom: 1px solid var(--border-tint); vertical-align: middle;">
                <td style="padding: 14px; font-family: monospace; font-weight: 600;">${app.id}</td>
                <td style="padding: 14px;">${app.applicantName}</td>
                <td style="padding: 14px;">${app.type}</td>
                <td style="padding: 14px;">${app.date}</td>
                <td style="padding: 14px;"><span class="status-pill ${statusClass}" ${inlineStyle} style="font-size:0.75rem; padding:4px 10px;">${app.status}</span></td>
                <td style="padding: 14px; text-align: center;">
                    <button onclick="openAuditModal('${app.id}')" style="background-color:#F77F00; color:white; border:none; padding:6px 10px; border-radius:4px; font-size:0.78rem; cursor:pointer; margin-right:5px;"><i class="fa-solid fa-magnifying-glass"></i> Audit</button>
                    <button onclick="mutateApplicationStatus('${app.id}', 'Approved')" style="background-color:#2A9D8F; color:white; border:none; padding:6px 10px; border-radius:4px; font-size:0.78rem; cursor:pointer; margin-right:5px;"><i class="fa-solid fa-file-check"></i> Approve</button>
                    <button onclick="mutateApplicationStatus('${app.id}', 'Rejected')" style="background-color:#E63946; color:white; border:none; padding:6px 10px; border-radius:4px; font-size:0.78rem; cursor:pointer;"><i class="fa-solid fa-ban"></i> Reject</button>
                </td>
            </tr>
        `;
    });
}

function openAuditModal(targetId) {
    let entries = JSON.parse(localStorage.getItem('applications')) || [];
    const app = entries.find(a => a.id === targetId);

    if (!app) {
        alert('Operational index lookup mismatch error.');
        return;
    }

    if (app.status === 'Submitted') {
        mutateApplicationStatus(targetId, 'Under Review');
    }

    const validImageStream = app.fileDataStream ? app.fileDataStream : 'https://via.placeholder.com/400x250/e2e8f0/475569?text=Verification+Identity+Proof+Matrix';

    const modalBody = document.getElementById('modal-details-body');
    modalBody.innerHTML = `
        <p><strong>Tracking Index ID:</strong> <span style="font-family:monospace; color:var(--secondary-blue);">${app.id}</span></p>
        <p><strong>Filing Type Category:</strong> ${app.type}</p>
        <p><strong>Legal Name Entry:</strong> ${app.applicantName}</p>
        <p><strong>National Aadhaar ID Number:</strong> ${app.nationalId || 'N/A'}</p>
        <p><strong>Communications Phone Ref:</strong> ${app.phone || 'N/A'}</p>
        <p><strong>Domicile Address Location:</strong> ${app.address || 'N/A'}</p>
        <hr style="border: 0; border-top: 1px solid var(--border-tint); margin: 10px 0;">
        <p><strong><i class="fa-solid fa-image"></i> Document Verification Attachment View:</strong></p>
        <div style="background:#F1F5F9; border:1px solid #CBD5E1; border-radius:8px; padding:12px; text-align:center;">
            <span style="font-size:0.78rem; display:block; margin-bottom:10px; color:#64748B; font-weight:500;"><i class="fa-solid fa-paperclip"></i> File: ${app.attachedFileName || 'default_identity_proof.jpg'}</span>
            <img src="${validImageStream}" alt="Document Verification Media View" style="max-width:100%; max-height:260px; border-radius:6px; border:1px solid #CBD5E1; box-shadow:0 4px 10px rgba(0,0,0,0.08);">
        </div>
    `;

    document.getElementById('audit-modal').style.display = 'flex';
}

function closeAuditModal() {
    document.getElementById('audit-modal').style.display = 'none';
}

function mutateApplicationStatus(targetId, newStatus) {
    let entries = JSON.parse(localStorage.getItem('applications')) || [];
    const recordIndex = entries.findIndex(a => a.id === targetId);
    
    if (recordIndex !== -1) {
        entries[recordIndex].status = newStatus;
        localStorage.setItem('applications', JSON.stringify(entries));
        renderAdminControlTable();
    }
}

function executeLogoutProcedure() {
    activeAuthenticatedSession = null;
    localStorage.removeItem('currentUser');
    switchView('home');
}

// Initial Boot Logic
window.onload = function() {
    rebuildDynamicNavigationBar();
    
    if (!localStorage.getItem('applications')) {
        const sampleRegistrySets = [
            { id: 'CERT-551024', userEmail: 'test@gov.in', type: 'Caste Certificate', applicantName: 'Applicant One', nationalId: '123456789012', phone: '9876543210', address: 'Plot 4, Madhapur, Hyderabad', attachedFileName: 'caste_declaration_proof.pdf', fileDataStream: '', date: '04/12/2026', status: 'Under Review' },
            { id: 'CERT-982145', userEmail: 'test@gov.in', type: 'Birth Certificate', applicantName: 'Applicant Two', nationalId: '987654321098', phone: '8765432109', address: 'Street 2, Gachibowli, Hyderabad', attachedFileName: 'hospital_birth_record.jpg', fileDataStream: '', date: '05/01/2026', status: 'Approved' }
        ];
        localStorage.setItem('applications', JSON.stringify(sampleRegistrySets));
    }
};