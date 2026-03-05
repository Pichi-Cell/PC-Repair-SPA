-- Database Schema for PC Repair Shop

-- Create Schema
CREATE SCHEMA IF NOT EXISTS "pcrepair";

-- Create Services Table
CREATE TABLE IF NOT EXISTS "pcrepair"."Services" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(10, 2),
    "icon" VARCHAR(255),
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create Inquiries Table
CREATE TABLE IF NOT EXISTS "pcrepair"."Inquiries" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "message" TEXT NOT NULL,
    "status" VARCHAR(50) DEFAULT 'new',
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Seed Initial Services
INSERT INTO "pcrepair"."Services" ("title", "description", "icon") 
VALUES 
('Laptop Repair', 'Screen replacements, battery issues, and motherboard diagnostics.', 'LaptopMedical'),
('Custom Builds', 'High-performance gaming rigs and workstations.', 'Microchip'),
('Data Recovery', 'Recovering lost files from corrupted drives.', 'Hdd'),
('Network Setup', 'Home and office networking, routers, and firewalls.', 'NetworkWired'),
('Server Maintenance', 'Enterprise server setup and routine health checks.', 'Server'),
('General Diagnostics', 'Not sure what is wrong? We will find the issue.', 'Tools')
ON CONFLICT DO NOTHING;
