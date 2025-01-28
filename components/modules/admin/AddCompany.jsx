"use client"

import React, { useState } from "react"
import { Button, Input } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AddCompany() {
  const [formData, setFormData] = useState({
    fullName: "",
    primaryIndustry: "",
    registrationNumber: "",
    secondaryIndustry: "",
    registrationYear: "",
    companyContact: "",
    kraPinNumber: "",
    contactPersonPhone: "",
    contactPersonEmail: "",
    tccNumber: "",
    bankName: "",
    accountNumber: "",
    incorporationCertificate: null,
    cr12Document: null,
    kraPinCertificate: null,
    tccCertificate: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    setFormData({
      ...formData,
      [name]: files[0],
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Data Submitted: ", formData)
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Company Registration Form</h1>
      <p className="mb-6">Please fill in the details below to register as a company/partner</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter Name of the Company"
            required
          />
        </div>

        <div>
          <Label htmlFor="primaryIndustry">Company Primary Industry *</Label>
          <Select
            id="primaryIndustry"
            name="primaryIndustry"
            value={formData.primaryIndustry}
            onValueChange={(value) => setFormData({ ...formData, primaryIndustry: value })}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="IT">IT</SelectItem>
              <SelectItem value="Finance">Finance</SelectItem>
              <SelectItem value="Health">Health</SelectItem>
              {/* Add more industries here */}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="registrationNumber">Registration Number *</Label>
          <Input
            id="registrationNumber"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            placeholder="Enter Registration Number"
            required
          />
        </div>

        <div>
          <Label htmlFor="secondaryIndustry">Company Secondary Industry *</Label>
          <Select
            id="secondaryIndustry"
            name="secondaryIndustry"
            value={formData.secondaryIndustry}
            onValueChange={(value) => setFormData({ ...formData, secondaryIndustry: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="IT">IT</SelectItem>
              <SelectItem value="Finance">Finance</SelectItem>
              <SelectItem value="Health">Health</SelectItem>
              {/* Add more industries here */}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="registrationYear">Registration Year *</Label>
          <Input
            id="registrationYear"
            name="registrationYear"
            type="date"
            value={formData.registrationYear}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="companyContact">Company Contact Details *</Label>
          <Input
            id="companyContact"
            name="companyContact"
            type="email"
            value={formData.companyContact}
            onChange={handleChange}
            placeholder="Enter Email Address"
            required
          />
        </div>

        <div>
          <Label htmlFor="kraPinNumber">KRA Pin Number *</Label>
          <Input
            id="kraPinNumber"
            name="kraPinNumber"
            value={formData.kraPinNumber}
            onChange={handleChange}
            placeholder="Enter KRA Pin Number"
            required
          />
        </div>

        <div>
          <Label htmlFor="contactPersonPhone">Contact Person Phone *</Label>
          <Input
            id="contactPersonPhone"
            name="contactPersonPhone"
            type="tel"
            value={formData.contactPersonPhone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            required
          />
        </div>

        <div>
          <Label htmlFor="contactPersonEmail">Contact Person Email *</Label>
          <Input
            id="contactPersonEmail"
            name="contactPersonEmail"
            type="email"
            value={formData.contactPersonEmail}
            onChange={handleChange}
            placeholder="Enter Email Address"
            required
          />
        </div>

        <div>
          <Label htmlFor="tccNumber">TCC Number *</Label>
          <Input
            id="tccNumber"
            name="tccNumber"
            value={formData.tccNumber}
            onChange={handleChange}
            placeholder="Enter TCC Number"
            required
          />
        </div>

        <div>
          <Label htmlFor="bankName">Bank Name *</Label>
          <Input
            id="bankName"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            placeholder="Enter Bank Name"
            required
          />
        </div>

        <div>
          <Label htmlFor="accountNumber">Account Number *</Label>
          <Input
            id="accountNumber"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            placeholder="Enter Account Number"
            required
          />
        </div>

        <div>
          <Label className="mb-2 block">Upload Certificate of Incorporation *</Label>
          <Input type="file" />
          <Button className="mt-2 bg-blue-500 text-white">Upload</Button>
        </div>

        
        <div>
          <Label className="mb-2 block">Upload Certificate of Incorporation *</Label>
          <Input type="file" />
          <Button className="mt-2 bg-blue-500 text-white">Upload</Button>
        </div>
        

        <div>
          <Label className="mb-2 block">Upload Certificate of Incorporation *</Label>
          <Input type="file" />
          <Button className="mt-2 bg-blue-500 text-white">Upload</Button>
        </div>

        <div>
          <Label className="mb-2 block">Upload Certificate of Incorporation *</Label>
          <Input type="file" />
          <Button className="mt-2 bg-blue-500 text-white">Upload</Button>
        </div>

        <Button type="submit" className="mt-4">Submit</Button>
      </form>
    </div>
  )
}
