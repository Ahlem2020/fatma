import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { ProjectDesc } from 'app/modules/admin/dashboards/models/ProjectDesc';
import { ProjectDescription } from 'app/modules/admin/dashboards/models/ProjectDescription';
import { ProjectService } from 'app/modules/admin/dashboards/project/project.service';
import { ProjectDescriptionService } from 'app/modules/admin/dashboards/services/project_description/project-description.service';
import { FormsFieldsModule } from 'app/modules/admin/ui/forms/fields/fields.module';
import { ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-table-description',
    templateUrl: './table-description.component.html',
    styleUrls: ['./table-description.component.css'],
    changeDetection: ChangeDetectionStrategy.Default,
    standalone: true,
    imports: [
        CommonModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatOptionModule,
    ],
})
export class TableDescriptionComponent implements OnInit {
    @ViewChild('stepper') stepper: MatStepper;
    firstFormGroup = new FormGroup({});
    secondFormGroup = new FormGroup({});
    projectDto: ProjectDesc = new ProjectDesc();
    projectDescription: ProjectDescription = this.projectDto.projectDescription;
    continents = [
        {
            name: 'Africa',
            countries: [
                'Algeria',
                'Angola',
                'Benin',
                'Botswana',
                'Burkina Faso',
                'Burundi',
                'Cape Verde',
                'Cameroon',
                'Central African Republic',
                'Chad',
                'Comoros',
                'Democratic Republic of the Congo',
                'Djibouti',
                'Egypt',
                'Equatorial Guinea',
                'Eritrea',
                'Ethiopia',
                'Gabon',
                'Gambia',
                'Ghana',
                'Guinea',
                'Guinea-Bissau',
                'Ivory Coast',
                'Kenya',
                'Lesotho',
                'Liberia',
                'Libya',
                'Madagascar',
                'Malawi',
                'Mali',
                'Mauritania',
                'Mauritius',
                'Mayotte',
                'Morocco',
                'Mozambique',
                'Namibia',
                'Niger',
                'Nigeria',
                'Réunion',
                'Republic of the Congo',
                'Rwanda',
                'São Tomé and Príncipe',
                'Senegal',
                'Seychelles',
                'Sierra Leone',
                'Somalia',
                'South Africa',
                'South Sudan',
                'Sudan',
                'Swaziland',
                'Tanzania',
                'Togo',
                'Tunisia',
                'Uganda',
                'Western Sahara',
                'Zambia',
                'Zimbabwe',
            ],
        },
        {
            name: 'Europe',
            countries: [
                'Albania',
                'Andorra',
                'Austria',
                'Belarus',
                'Belgium',
                'Bosnia and Herzegovina',
                'Bulgaria',
                'Croatia',
                'Cyprus',
                'Czech Republic',
                'Denmark',
                'Estonia',
                'Finland',
                'France',
                'Germany',
                'Greece',
                'Hungary',
                'Iceland',
                'Ireland',
                'Italy',
                'Latvia',
                'Liechtenstein',
                'Lithuania',
                'Luxembourg',
                'Macedonia',
                'Malta',
                'Moldova',
                'Monaco',
                'Montenegro',
                'Netherlands',
                'Norway',
                'Poland',
                'Portugal',
                'Romania',
                'Russia',
                'San Marino',
                'Serbia',
                'Slovakia',
                'Slovenia',
                'Spain',
                'Sweden',
                'Switzerland',
                'Ukraine',
                'United Kingdom',
                'Vatican City',
            ],
        },
        {
            name: 'Asia',
            countries: [
                'Afghanistan',
                'Armenia',
                'Azerbaijan',
                'Bahrain',
                'Bangladesh',
                'Bhutan',
                'Brunei',
                'Cambodia',
                'China',
                'Cyprus',
                'Georgia',
                'India',
                'Indonesia',
                'Iran',
                'Iraq',
                'Israel',
                'Japan',
                'Jordan',
                'Kazakhstan',
                'Kuwait',
                'Kyrgyzstan',
                'Laos',
                'Lebanon',
                'Malaysia',
                'Maldives',
                'Mongolia',
                'Myanmar',
                'Nepal',
                'North Korea',
                'Oman',
                'Pakistan',
                'Palestine',
                'Philippines',
                'Qatar',
                'Saudi Arabia',
                'Singapore',
                'South Korea',
                'Sri Lanka',
                'Syria',
                'Taiwan',
                'Tajikistan',
                'Thailand',
                'Timor-Leste',
                'Turkey',
                'Turkmenistan',
                'United Arab Emirates',
                'Uzbekistan',
                'Vietnam',
                'Yemen',
            ],
        },
        {
            name: 'North America',
            countries: [
                'Antigua and Barbuda',
                'Bahamas',
                'Barbados',
                'Belize',
                'Canada',
                'Costa Rica',
                'Cuba',
                'Dominica',
                'Dominican Republic',
                'El Salvador',
                'Grenada',
                'Guatemala',
                'Haiti',
                'Honduras',
                'Jamaica',
                'Mexico',
                'Nicaragua',
                'Panama',
                'Saint Kitts and Nevis',
                'Saint Lucia',
                'Saint Vincent and the Grenadines',
                'Trinidad and Tobago',
                'United States',
            ],
        },
        {
            name: 'South America',
            countries: [
                'Argentina',
                'Bolivia',
                'Brazil',
                'Chile',
                'Colombia',
                'Ecuador',
                'Guyana',
                'Paraguay',
                'Peru',
                'Suriname',
                'Uruguay',
                'Venezuela',
            ],
        },
        {
            name: 'Australia',
            countries: [
                'Australia',
                'Fiji',
                'Kiribati',
                'Marshall Islands',
                'Micronesia',
                'Nauru',
                'New Zealand',
                'Palau',
                'Papua New Guinea',
                'Samoa',
                'Solomon Islands',
                'Tonga',
                'Tuvalu',
                'Vanuatu',
            ],
        },
    ];
    selectedSource: string = '';
    co2Result: number = 0;
    ch4Result: number = 0;
    n2oResult: number = 0;
    selectedContinent = 'Asia';
    selectedCountry = null;

    constructor(
        private _router: Router,
        private projectService: ProjectDescriptionService,
        private cdr: ChangeDetectorRef
    ) {}
    countries = this.continents.find(
        (continent) => continent.name === this.selectedContinent
    ).countries;

    ngOnInit(): void {
        this.selectedContinent = this.continents[0]?.name; // Select the first continent by default
        this.updateResults();
        this.selectedSource = '100yr SAR'; // or any other value
        console.log(this.selectedSource);
        this.onContinentChange();
    }
    onContinentChange() {
        console.log('onContinentChange called');

        this.cdr.detectChanges();

        const selectedContinentObj = this.continents.find(
            (continent) => continent.name === this.selectedContinent
        );

        if (selectedContinentObj) {
            this.countries = selectedContinentObj.countries;
        } else {
            this.countries = [];
        }

        this.selectedCountry = null;
        this.cdr.detectChanges();
    }

    private saveProject() {
        this.projectService.createProjectDescription(this.projectDto).subscribe(
            (data) => {
                console.log(data);
            },
            (error) => console.log(error)
        );
    }
    onSubmit() {
        console.log(this.projectDto);
        this.saveProject();
    }
    updateResults() {
      console.log("change happend");
        switch (this.selectedSource) {
            case '100yr SAR':
                this.co2Result = 1;
                this.ch4Result = 21;
                this.n2oResult = 310;
                break;
            case '100yr AR4':
                this.co2Result = 1;
                this.ch4Result = 25;
                this.n2oResult = 298;
                break;
            case '100yr AR5 with CC feedback':
                this.co2Result = 1;
                this.ch4Result = 34;
                this.n2oResult = 298;
                break;
            default:
                this.co2Result = 0;
                this.ch4Result = 0;
                this.n2oResult = 0;
                break;
        }
    }
}
