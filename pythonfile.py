import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import sys 


c = sys.argv[1].split(',')
c = [int(i) for i in c]
c = [c]


path = 'roo_data.csv'
df = pd.read_csv(path)
X = df.drop(columns = ['Suggested Job Role'])
y = df['Suggested Job Role']





def target(i):
    if (i in ['Network Security Administrator', 'Network Security Engineer', 'Information Security Analyst', 'Systems Security Administrator']):
        return 'Network Engineer'
    elif (i in ['Portal Administrator', 'Information Technology Auditor']):
        return 'Project Manager'
    elif (i in ['Database Administrator', 'Database Manager', 'Data Architect']):
        return 'Database Developer'
    elif (i in ['Software Engineer', 'CRM Technical Developer', 'Applications Developer']):
        return 'Software Developer'
    elif (i in ['Programmer Analyst', 'Business Intelligence Analyst', 'E-Commerce Analyst', 'Systems Analyst', 'CRM Business Analyst', 'Solutions Architect']):
        return 'Business Analyst'
    elif (i in ['Technical Services/Help Desk/Tech Support', 'Information Technology Auditor', 'Technical Support']):
        return 'Technical Engineer'
    elif (i in ['Mobile Applications Developer', 'UX Designer', 'Design & UX']):
        return 'Web Developer'
    elif (i in ['Software Systems Engineer', 'Quality Assurance Associate']):
        return 'Software Quality Assurance (QA) / Testing'
    elif i == 'Information Technology Manager':
        return 'Project Manager'
    elif i == 'Business Systems Analyst':
        return 'Technical Engineer'
    else:
        return i



y = y.apply(target, convert_dtype=True)
from sklearn import preprocessing 

le_workLongTime = preprocessing.LabelEncoder()
X['can work long time before system?']= le_workLongTime.fit_transform(X['can work long time before system?'])

le_selfLearningCap = preprocessing.LabelEncoder()
X['self-learning capability?']= le_selfLearningCap.fit_transform(X['self-learning capability?'])

le_extraCoursesDid = preprocessing.LabelEncoder()
X['Extra-courses did']= le_extraCoursesDid.fit_transform(X['Extra-courses did'])

le_certifications = preprocessing.LabelEncoder()
X['certifications']= le_certifications.fit_transform(X['certifications'])

le_workshops = preprocessing.LabelEncoder()
X['workshops']= le_workshops.fit_transform(X['workshops'])

le_talentTestsTaken = preprocessing.LabelEncoder()
X['talenttests taken?']= le_talentTestsTaken.fit_transform(X['talenttests taken?'])

le_olympiads = preprocessing.LabelEncoder()
X['olympiads']= le_olympiads.fit_transform(X['olympiads'])

le_rnwskills = preprocessing.LabelEncoder()
X['reading and writing skills']= le_rnwskills.fit_transform(X['reading and writing skills'])


le_memoryCapability = preprocessing.LabelEncoder()
X['memory capability score']= le_memoryCapability.fit_transform(X['memory capability score'])

le_interestedSubjects = preprocessing.LabelEncoder()
X['Interested subjects']= le_interestedSubjects.fit_transform(X['Interested subjects'])

le_interestedCareerArea = preprocessing.LabelEncoder()
X['interested career area ']= le_interestedCareerArea.fit_transform(X['interested career area '])

le_jobHigherStudies = preprocessing.LabelEncoder()
X['Job/Higher Studies?']= le_jobHigherStudies.fit_transform(X['Job/Higher Studies?'])

le_typeOfCompany = preprocessing.LabelEncoder()
X['Type of company want to settle in?']= le_typeOfCompany.fit_transform(X['Type of company want to settle in?'])

le_takenInputsSeniors = preprocessing.LabelEncoder()
X['Taken inputs from seniors or elders']= le_takenInputsSeniors.fit_transform(X['Taken inputs from seniors or elders'])


le_interestedInGames = preprocessing.LabelEncoder()
X['interested in games']= le_interestedInGames.fit_transform(X['interested in games'])

le_interestedBooks = preprocessing.LabelEncoder()
X['Interested Type of Books']= le_interestedBooks.fit_transform(X['Interested Type of Books'])

le_salaryRange = preprocessing.LabelEncoder()
X['Salary Range Expected']= le_salaryRange.fit_transform(X['Salary Range Expected'])

le_Relationship = preprocessing.LabelEncoder()
X['In a Realtionship?']= le_Relationship.fit_transform(X['In a Realtionship?'])

le_Behaviour = preprocessing.LabelEncoder()
X['Gentle or Tuff behaviour?']= le_Behaviour.fit_transform(X['Gentle or Tuff behaviour?'])


le_managementTechnical = preprocessing.LabelEncoder()
X['Management or Technical']= le_managementTechnical.fit_transform(X['Management or Technical'])


le_salWork = preprocessing.LabelEncoder()
X['Salary/work']= le_salWork.fit_transform(X['Salary/work'])

le_hardSmart = preprocessing.LabelEncoder()
X['hard/smart worker']= le_hardSmart.fit_transform(X['hard/smart worker'])

le_workedInTeams = preprocessing.LabelEncoder()
X['worked in teams ever?']= le_workedInTeams.fit_transform(X['worked in teams ever?'])

le_introvert = preprocessing.LabelEncoder()
X['Introvert']= le_introvert.fit_transform(X['Introvert'])

le_target = preprocessing.LabelEncoder()
y = le_target.fit_transform(y)

X.drop(['reading and writing skills', 'memory capability score', 'In a Realtionship?', 'interested in games', 'Introvert', 'hard/smart worker', 'Management or Technical', 'talenttests taken?', 'worked in teams ever?', 'Salary Range Expected', 'Taken inputs from seniors or elders', 'Job/Higher Studies?', 'Salary/work', 'self-learning capability?', 'Gentle or Tuff behaviour?', 'Extra-courses did', 'olympiads', 'can work long time before system?'], axis = 1, inplace = True)

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
softReg = LogisticRegression(multi_class = 'multinomial', max_iter=1000, solver = 'lbfgs')

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=7)
softReg.fit(X_train, y_train)

xp = c

yp = softReg.predict(xp)

print(le_target.classes_[yp][0])

 