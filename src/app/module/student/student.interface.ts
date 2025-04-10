



export type Guardian={
        fatherName: string
        fatherOccupation: string
        fatherContactNo: string
        motherName: string
        motherOccupation: string
        motherContactNo: string
}
  export type localGuardian={
     name: string;
     occupation:string;
     contactNo:number;

  }

export type Student = {
  id: string
  name: {
    firstName: string
    middleName: string
    lastName: string
  }
  gender: 'male' | 'female'
  dateOfBirth?: string
  email: string
  contactNumber: string
  emergencyContactNo: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  permanentAddress: string
  guardian: Guardian
  localGuardian:localGuardian;
  profileImage?:string  ;
  isActive:"active" | "inActive"
}
