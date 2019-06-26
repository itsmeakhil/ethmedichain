    pragma solidity ^0.5.0;

contract medichain{

     
    address admin;
    enum gender {male, female, other}

    constructor() public {
        admin = msg.sender;
    }
    
     struct patient{
        
        address Publickey;
        uint Id;
        string Name;
        uint Age;
        gender MyGender;
        uint Phone  ;
        string Email;
        string Addrs;
       
    }
    mapping(uint => patient) public PatientDetails;
    mapping(address => uint ) PatientAddress;
    
    
     function setPatient(address _Publickey,uint _Id, string memory _Name, uint _Age, gender _MyGender, uint _Phone, string memory _Email, string memory _Addrs) public onlyDoctor(msg.sender) {
        PatientDetails[_Id] = patient(_Publickey, _Id, _Name, _Age, _MyGender, _Phone, _Email, _Addrs);
        PatientAddress[_Publickey] = _Id;
    }
    
     function getPatient(uint _Id) public view returns (address _Publickey,uint _Id1, string memory _Name, uint _Age, gender _MyGender, uint _Phone, string memory _Email, string memory _Addrs){
         
        _Publickey = PatientDetails[_Id].Publickey;
        _Id1 = PatientDetails[_Id].Id;
        _Name = PatientDetails[_Id].Name;
        _Age = PatientDetails[_Id].Age;
        _MyGender = PatientDetails[_Id].MyGender;
        _Phone = PatientDetails[_Id].Phone;
        _Email = PatientDetails[_Id].Email;
        _Addrs = PatientDetails[_Id].Addrs;
        
    }

    struct doctor{
        
        address Publickey;
        uint Id;
        string Name;
        uint Age;
        gender MyGender;
        string Email;
        uint HospitalId;
        string Qualification;
    }
    

    mapping(uint => doctor) public DoctorList;
    mapping(address => uint)  DoctorAddress;
    
    modifier onlyHospital(address adr) { 
        require(HospitalAddress[adr] != 0); 
        _; 
        
    }
    
    
    function setDoctor(address _Publickey, uint _Id,  string memory _Name, uint _Age,gender _MyGender, string memory _Email, uint _HospitalId, string memory _Qualification ) public onlyHospital(msg.sender) {
       DoctorList[_Id] = doctor(_Publickey, _Id , _Name, _Age, _MyGender, _Email, _HospitalId, _Qualification );
       DoctorAddress[_Publickey] = _Id;
    }    

    function getDoctor(uint _Id) public view returns (address _Publickey, uint _Id1,string memory _Name, uint _Age,gender _MyGender, string memory _Email, uint _HospitalId, string memory _Qualification){

        _Publickey = DoctorList[_Id].Publickey;
        _Id1 = DoctorList[_Id].Id;
        _Name = DoctorList[_Id].Name;
        _Age = DoctorList[_Id].Age;
        _MyGender = DoctorList[_Id].MyGender;
        _Email = DoctorList[_Id].Email;
        _HospitalId = DoctorList[_Id].HospitalId;
        _Qualification = DoctorList[_Id].Qualification;
    }

    struct hospital{
        address Publickey;
        uint Id;
        string Name;
        string Email;
        uint Phone;
        string Addrs;
      
    }

    mapping(uint => hospital) public HospitalDetails;
    mapping(address => uint)  HospitalAddress;
    
    modifier onlyAdmin(){
        require(msg.sender == admin);
        
        _;
    }
    function setHospital( address _Publickey, uint _Id, string memory _Name, string memory _Email, uint _Phone, string memory _Addrs) public onlyAdmin {
        HospitalDetails[_Id] = hospital( _Publickey, _Id, _Name, _Email, _Phone, _Addrs);
        // size=size+1;
        HospitalAddress[_Publickey]= _Id;
    }
    
    
    function getHospital(uint _Id) public view returns ( address _Publickey, uint _Id1, string memory _Name, string memory _Email, uint  _Phone, string memory _Addrs){

        _Publickey= HospitalDetails[_Id].Publickey;
        _Id1 = HospitalDetails[_Id].Id;
        _Name = HospitalDetails[_Id].Name;
        _Email = HospitalDetails[_Id].Email;
        _Phone = HospitalDetails[_Id].Phone;
        _Addrs = HospitalDetails[_Id].Addrs;
        }
    
    
  struct Treatment{
      
        // uint Tid;  
        uint Id;
        uint DoctorId;
        uint Hospital;
        string Observation;
        string Disease;
        string Medicine;
        
    }
    
    mapping(uint => Treatment) public Treatmentdetails;
    
    
    modifier onlyDoctor(address adr) { 
        require(DoctorAddress[adr] != 0); 
        _; 
        
    }
    
    
    
    function setTreatmentDetails(uint _Id, uint _DoctorId,uint _Hospital, string memory _Observation, string memory _Disease, string memory _Medicine ) public onlyDoctor(msg.sender){
        
        Treatmentdetails[_Id] = Treatment(  _Id, _DoctorId, _Hospital, _Observation, _Disease, _Medicine);
        
    }
    function getTreament(uint _Id) public view returns(uint _Id1, uint _DoctorId, uint _Hospital, string memory _Observation, string memory _Disease, string memory _Medicine){
        
        _Id1         = Treatmentdetails[_Id].Id;
        _DoctorId    = Treatmentdetails[_Id].DoctorId;
        _Hospital    = Treatmentdetails[_Id].Hospital;
        _Observation = Treatmentdetails[_Id].Observation;
        _Disease     = Treatmentdetails[_Id].Disease;
        _Medicine    = Treatmentdetails[_Id].Medicine;
    
        
    }
    
   
  
   
}




