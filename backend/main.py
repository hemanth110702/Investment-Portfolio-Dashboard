from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware  # Import CORSMiddleware
from supabase import create_client, Client
from pydantic import BaseModel
from typing import List
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize Supabase client
supabase_url = os.getenv("SUPABASE_URL")
supabase_key = os.getenv("SUPABASE_KEY")
supabase: Client = create_client(supabase_url, supabase_key)

# FastAPI app
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow requests from this origin
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Pydantic models for response validation
class InvestmentResponse(BaseModel):
    id: int
    mutual_fund_id: int
    investment_date: str
    amount_invested: float
    nav_at_investment: float
    returns_since_investment: float

class SectorAllocationResponse(BaseModel):
    id: int
    mutual_fund_id: int
    sector: str
    allocation_percentage: float

class StockAllocationResponse(BaseModel):
    id: int
    mutual_fund_id: int
    stock: str
    allocation_percentage: float

class MarketCapAllocationResponse(BaseModel):
    id: int
    mutual_fund_id: int
    market_cap: str
    allocation_percentage: float

class OverlapAnalysisResponse(BaseModel):
    id: int
    fund_1_id: int
    fund_2_id: int
    overlap_percentage: float

# API endpoints
@app.get("/api/investments", response_model=List[InvestmentResponse])
def get_investments():
    try:
        # Fetch data from the 'investments' table
        response = supabase.table("investments").select("*").execute()
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/sector-allocations/{fund_id}", response_model=List[SectorAllocationResponse])
def get_sector_allocations(fund_id: int):
    try:
        # Fetch sector allocations for a specific mutual fund
        response = supabase.table("sector_allocations").select("*").eq("mutual_fund_id", fund_id).execute()
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/stock-allocations/{fund_id}", response_model=List[StockAllocationResponse])
def get_stock_allocations(fund_id: int):
    try:
        # Fetch stock allocations for a specific mutual fund
        response = supabase.table("stock_allocations").select("*").eq("mutual_fund_id", fund_id).execute()
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/market-cap-allocations/{fund_id}", response_model=List[MarketCapAllocationResponse])
def get_market_cap_allocations(fund_id: int):
    try:
        # Fetch market cap allocations for a specific mutual fund
        response = supabase.table("market_cap_allocations").select("*").eq("mutual_fund_id", fund_id).execute()
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/overlap-analysis", response_model=List[OverlapAnalysisResponse])
def get_overlap_analysis():
    try:
        # Fetch overlap analysis data
        response = supabase.table("overlap_analysis").select("*").execute()
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Run the app
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)