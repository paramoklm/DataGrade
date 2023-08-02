from typing import List
from typing import Optional
from typing import Tuple




class Grade:
    def __init__(self, name: str, grade: float, denom: float, coeff: float):
        self.name = name
        self.grade = grade
        self.coeff = coeff
        

class Subject:
    def __init__(self, name: str, coeff: float):
        self.name = name
        self.coeff = coeff
        self.grades = []

    def add_grade(self, name: str, grade: float, denom: float, coeff: float):
        self.grades.append(Grade(name, grade, denom, coeff))


class Module:
    def __init__(self, name: str, coeff: float):
        self.name = name
        self.coeff = coeff
        self.subjects = []

    def add_subject(self, name: str, coeff: float):
        self.subjects.append(Subject(name, coeff))

class Grid:
    def __init__(self):
        self.modules = []

    def add_modules(self, name, coeff):
        self.modules.append(name, coeff)