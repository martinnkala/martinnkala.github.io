import pytest
from L06_bug1 import miles_per_gallon

def test_miles_per_gallon():
    assert miles_per_gallon(1000, 1100, 10) == 10
    assert miles_per_gallon(1000.0, 1100.0, 10.5) == 10

pytest.main(["-v", "--tb=line", "-rN", "L06_test_bug1.py"])   